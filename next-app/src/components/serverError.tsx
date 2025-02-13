import React from "react";

const ServerError: React.FC = () => {
  return (
    <p className="text-red-600 font-bold center-page bg-[#efefef] z-30 p-20 w-full text-center">
      RSS Error!
      <br />
      <br />
      Please Check your connection or try again later
    </p>
  );
};

export default ServerError;
