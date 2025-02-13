import { NewsItemType } from "@/types/newsType";
import { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const RSSUrl = "https://cointelegraph.com/rss";
  const parser = new Parser();

  try {
    const feed = await parser.parseURL(RSSUrl);
    const newsData: NewsItemType[] = feed.items.map((item) => ({
      id: crypto.randomUUID(),
      image: item.enclosure?.url || "",
      date: item.pubDate || "",
      creator: item.creator || "",
      title: item.title || "",
      contentSnippet: item.contentSnippet || "",
      link: item.link || "",
    }));
    res.status(200).json(newsData);
  } catch (error) {
    console.log("Faild to fetchin RSS feed:", error);
    res.status(500).json({ error: "Faild To Fetching!" });
  }
};

export default handler;
