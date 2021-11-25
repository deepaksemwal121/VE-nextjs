import React from "react";
import { images } from "../constants/constant";

const Card = ({ image, heading }) => {
  return (
    <div className=" shadow-2xl bg-white rounded-2xl my-5 p-10">
      <div className="flex flex-col items-center ">
        <img src={image} alt="" />
        <h1 className="text-xl">{heading}</h1>
        <button className="bg-black rounded-md px-4 py-1 text-white my-4">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Card;
