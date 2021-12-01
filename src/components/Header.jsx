import { Avatar } from "@mui/material";
import { images } from "../constants/constant";
import { AiOutlineShopping } from "react-icons/ai";

const Menu = () => (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="/consultation">Self Assessment</a>
    </p>
    <p>
      <a href="#">Products</a>
    </p>
    <p>
      <a href="#">Book Consultation</a>
    </p>
    <p>
      <a href="#">Home</a>
    </p>
    <p>
      <a href="#">Home</a>
    </p>
  </>
);

const Header = () => {
  return (
    <div>
      <div className="flex  bg-yellow-500">
        <div className="logo bg-red items-center justify-center flex w-1/6">
          <img src={images.logo} className="w-3/4" alt="" />
        </div>
        <div className="px-10 nav w-4/6 flex justify-evenly text-white font-semibold items-center">
          <Menu />
        </div>
        <div className=" px-10 flex justify-evenly items-center details__wrapper w-1/6 text-white">
          <Avatar />
          <p className="text-4xl">
            <AiOutlineShopping />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
