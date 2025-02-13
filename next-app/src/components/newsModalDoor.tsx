import { NewsModalDoorProps } from "@/types/newsProps";
import React from "react";

const NewsModalDoor: React.FC<NewsModalDoorProps> = ({ handleOpenModal }) => {
  return (
    <div className="create-modal flex justify-center mb-10 mt-7">
      <button
        onClick={handleOpenModal}
        className="w-full lg:w-1/2 bg-cyan-600 text-black py-3.5 rounded-lg hover:text-white hover:bg-cyan-900 transition-all duration-500 ease-in"
      >
        Create News
      </button>
    </div>
  );
};

export default NewsModalDoor;
