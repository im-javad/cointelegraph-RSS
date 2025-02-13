import { getRelativeTime } from "@/lib/newsLib";
import { NewsItemProps } from "@/types/newsProps";
import React from "react";

const NewsItem: React.FC<NewsItemProps> = ({
  item,
  handleEditNews,
  handleDeleteNews,
}) => {
  return (
    <div className="item card bg-neutral-900 w-full">
      <figure>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </figure>
      <div className="card-body px-6 py-8">
        <h2 className="card-title text-slate-200 mb-2">{item.title}</h2>
        <p className="card-content mb-3">{item.contentSnippet}</p>
        <span>Creator: {item.creator}</span>
        <span>Public Date: {getRelativeTime(item.date)}</span>
        <a target="_blank" href={item.link} className=" text-cyan-500">
          More: Visit source in cointelegraph
        </a>
        <div className="card-actions w-full grid grid-cols-2">
          <button
            className="btn btn-outline btn-primary"
            onClick={() =>
              handleEditNews(
                item.id,
                item.title,
                item.contentSnippet,
                item.creator,
                item.link,
                item.image
              )
            }
          >
            Edit
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => handleDeleteNews(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
