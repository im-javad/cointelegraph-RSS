import React from "react";
import NewsItem from "./newsItem";
import { NewsItemsProps } from "@/types/newsProps";

const NewsItems: React.FC<NewsItemsProps> = ({
  news,
  handleEditNews,
  handleDeleteNews,
}) => {
  if (news.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4" aria-live="polite">
        No news available.
      </p>
    );
  }
  return (
    <div className="items grid grid-cols-1 lg:grid-cols-2 gap-6">
      {news.map((item) => (
        <NewsItem
          item={item}
          handleEditNews={handleEditNews}
          handleDeleteNews={handleDeleteNews}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default NewsItems;
