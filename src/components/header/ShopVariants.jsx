import React from "react";

const ShopVariants = ({ variant }) => {
  return (
    <div className="flex bg-gray-300">
      {variant.map((item) => {
        return <div className="grid grid-cols-3">{item.node.title}</div>;
      })}
    </div>
  );
};

export default ShopVariants;
