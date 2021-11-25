import React from "react";
import { images } from "../constants/constant";

const Card = ({ image, heading }) => {
  return (
    <div className=" my-10 w-80 shadow-2xl bg-white rounded-2xl  p-10">
      <div className="flex flex-col items-center ">
        <img src={image} alt="" />
        <h1 className="text-xl">{heading}</h1>
        <button
          style={{
            background: "black",
            color: "white",
            padding: "0.7rem 2rem",
            borderRadius: "5px",
            margin: "1rem 0.5rem",
          }}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Card;
