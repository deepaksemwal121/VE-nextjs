import { useEffect, useState } from "react";
import WooCommerce from "../../config/WooCommerce.server";
const ProductVariation = ({ variations, id }) => {
  const [Variation, setVariation] = useState([]);
  const [SelectedVar, setSelectedVar] = useState(0);
  useEffect(() => {
    WooCommerce.get(`products/${id}/variations`).then((response) => {
      console.log(response.data);
      setVariation(response.data);
    });
  }, []);

  return (
    <div className="my-4">
      <div className="flex">
        {Variation
          ? Variation.map((item,i) => {
              console.log(Variation[0].sale_price);
              return (
                <div onClick={()=>setSelectedVar(i)} className="w-1/3 flex justify-evenly bg-gray-700 mx-1 rounded p-1">
                  <div className="line-through text-gray-400">
                  ₹{item.regular_price}
                  </div>
                  <div className="text-white">₹{item.sale_price}</div>
                </div>
              );
            })
          : ""}
      </div>
      {Variation[SelectedVar]?(
        <div className="flex align-bottom my-2">
          <div className='line-through text-gray-400 mx-3 text-sm'>₹{Variation[SelectedVar].regular_price}</div>
          <div className='text-xl text-green-400'>₹{Variation[SelectedVar].sale_price}</div>
          <div className=''>(include GST and Shipping)</div>
        </div>
      ):'price to be loaded'}
      <div>
        <button className='bg-site-color px-4 text-white py-2 w-full my-2 rounded'>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductVariation;
