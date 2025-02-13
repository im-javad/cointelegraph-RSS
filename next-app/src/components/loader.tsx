import React from "react";

const Loader = () => {
  return (
    <div className="center-page flex flex-col justify-center">
      <span className="loading loading-dots bg-cyan-900 w-28"></span>
      <span className="text-center text-stone-950 text-lg">Loading</span>
    </div>
  );
};

export default Loader;
