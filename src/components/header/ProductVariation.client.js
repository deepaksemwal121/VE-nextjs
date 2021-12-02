import { useState } from "react";
import ShopifyData from "../../config/Shopifyconfig";

const ProductVariation = ({ productVar }) => {
  const [SelectedVar, setSelectedVar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const variantId = productVar.id;
  console.log(variantId);
  async function checkout() {
    setIsLoading(true);
    const checkOut = await ShopifyData({ checkoutMutation, variantId });
    const { webUrl } = checkOut.checkoutCreate.checkout;
    window.location.href = webUrl;
  }

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
      <button
        className="bg-black px-4 text-white py-2 w-1/2 my-2 flex items-center justify-center rounded"
        onClick={checkout}
      >
        {isLoading && (
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        Buy Now
      </button>
    </div>
  );
};

export default ProductVariation;
const checkoutMutation = `mutation CheckoutCreate($variantId: ID!) {
  checkoutCreate(input: {lineItems: {variantId: $variantId, quantity: 1}}) {
    checkout {
      webUrl
    }
  }
}`;
