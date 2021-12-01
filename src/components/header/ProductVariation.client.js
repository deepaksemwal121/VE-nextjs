import { useState } from "react";
const ProductVariation = ({ productVar }) => {
  const [SelectedVar, setSelectedVar] = useState(0);

  return (
    <div className="my-4">
      <div className="flex">
        {productVar.map((item, index) => {
          return (
            <div
              onClick={() => setSelectedVar(index)}
              className={`w-1/3 flex justify-evenly  mx-1 rounded p-1 ${
                SelectedVar == index ? "bg-yellow-500" : "bg-gray-600"
              }`}
            >
              <div className="line-through text-gray-400">
                ₹{item.node.compareAtPrice}
              </div>
              <div className="text-white">₹{item.node.price}</div>
            </div>
          );
        })}
      </div>
      {productVar[SelectedVar] ? (
        <div className="flex align-bottom my-2">
          <div className="line-through text-gray-400 mx-3 text-sm">
            ₹{productVar[SelectedVar].node.compareAtPrice}
          </div>
          <div className="text-xl text-green-400">
            ₹{productVar[SelectedVar].node.price}
          </div>
          <div className="">(include GST and Shipping)</div>
        </div>
      ) : (
        "price to be loaded"
      )}
      <div>
        <button className="bg-site-color px-4 text-white py-2 w-full my-2 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductVariation;
