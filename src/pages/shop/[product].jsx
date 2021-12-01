import { AiFillStar, AiFillAmazonSquare } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import { BsStarHalf } from "react-icons/bs";
import Header from "../../components/Header";
import ProductShortDesc from "../../components/header/ProductShortDesc.client";
import ProductVariation from "../../components/header/ProductVariation.client";
import ProductCarousel from "../../components/ProductCarousel";
import { getAllProducts } from "../../config/Shopifyconfig";
import ProductLongDesc from "../../components/header/ProductLongDesc.client";

const product = ({ product }) => {
  const imgSrc = product.node.images.edges;
  const productDetails = product.node.title;
  const productVar = product.node.variants.edges;
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1  md:grid-cols-2 products__section">
        <div className=" mx-5 my-3 md:mx-20 md:my-10">
          <ProductCarousel productImg={imgSrc} />
          <div className="my-5 flex flex-row ">
            <div className="px-3">
              <img
                className="h-20"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </div>
            <div className="flex  flex-col items-center">
              <h2 className="text-yellow-500 flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
              </h2>
              <p className="text-xl font-semibold px-2">4.2 Ratings</p>
              <p>1000+ Reveiws</p>
            </div>
          </div>
          <div className="available__on flex flex-row items-center">
            <div>
              <h2 className="font-semibold text-xl">Available On</h2>
            </div>
            <div className="flex px-4">
              <AiFillAmazonSquare size={50} />
              <SiFlipkart size={45} />
            </div>
          </div>
        </div>
        <div className=" mx-5 my-3 md:mx-20 md:my-10">
          <h2 className="text-3xl font-semibold md:mt-10">{productDetails}</h2>
          <ProductShortDesc />
          <ProductVariation productVar={productVar} />
        </div>
      </div>
      <ProductLongDesc />
    </div>
  );
};

export default product;
export async function getServerSideProps(context) {
  const products = await getAllProducts();
  console.log("Hello from product page");
  console.log(products);
  return {
    props: { product: products[0] }, // will be passed to the page component as props
  };
}
