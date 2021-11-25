import { useEffect, useState } from "react";
import WooCommerce from "../../config/WooCommerce.server";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import ProductShortDesc from "../../components/header/ProductShortDesc.client";
import ProductVariation from "../../components/header/ProductVariation.client";
import { images } from "../../constants/constant";
import { AiFillAmazonCircle } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import ProductLongDesc from "../../components/header/ProductLongDesc.client";

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
    <div>
      <div className="w-full flex justify-center my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-5/6">
          <div className="p-4">
            {Product ? console.log(Product.images[0].src) : "nothin"}
            {Product ? (
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                organicArrows={false}
                mobileTouch
                interval={6000}
              >
                <div data-src={Product.images[0].src} />
                <div data-src={Product.images[1].src} />
              </AutoplaySlider>
            ) : (
              ""
            )}
            <div className="mt-10">
              <div>
                <div className="text-xl font-medium">
                  Cash On Delivery Available
                </div>
                <div>
                  <img className="w-1/2" src={images.gmpImage} />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <div className="text-xl font-medium">Also available on:</div>
                <div className="flex space-x-2">
                  <AiFillAmazonCircle size={50} />
                  <SiFlipkart size={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl my-1 md:text-4xl font-semibold">
              {Product ? Product.name : "Product Name"}
            </div>
            <ProductShortDesc />
            {Product ? (
              <ProductVariation
                id={Product.id}
                variations={Product.variations}
              />
            ) : null}
          </div>
        </div>
      </div>
      <ProductLongDesc />
    </div>
  );
};

export default Product;
