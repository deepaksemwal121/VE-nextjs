import { useEffect, useState } from "react";
import WooCommerce from "../../config/WooCommerce.server";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import ProductShortDesc from "../../components/header/ProductShortDesc.client";

const Product = ({ res }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [Product, setProduct] = useState();
  useEffect(() => {
    WooCommerce.get("products")
      .then((response) => {
        console.log(response.data[0]);
        setProduct(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
        alert(err.msg);
      });
  }, []);
  return (
    <div className="w-full flex justify-center my-5">
      <div className="grid grid-cols-2 w-5/6">
        <div className="p-4">
          {Product ? console.log(Product.images[0].src) : "nothin"}
          {Product ? (
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={6000}
            >
              <div data-src={Product.images[0].src} />
              <div data-src={Product.images[1].src} />
            </AutoplaySlider>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="text-4xl font-semibold p-4">
            {Product ? Product.name : "Product Name"}
          </div>
          <ProductShortDesc />
        </div>
      </div>
    </div>
  );
};

export default Product;
