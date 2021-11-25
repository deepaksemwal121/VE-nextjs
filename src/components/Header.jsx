import { images } from "../constants/constant";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <div className="flex justify-evenly flex-row w-3/4">
    <p className="font-semibold">
      <a href="#home">Home</a>
    </p>
    <p className="font-semibold">
      <a href="#wgpt3">Shop</a>
    </p>
    <p className="font-semibold">
      <a href="#possibility">Services</a>
    </p>
    <p className="font-semibold">
      <a href="#features">Blog</a>
    </p>
    <p className="font-semibold">
      <a href="#blog">About</a>
    </p>
    <p className="font-semibold">
      <a href="#blog">Contact</a>
    </p>
  </div>
);

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-full flex p-2" style={{ backgroundColor: "#f3b64b" }}>
      <div className="flex  items-center">
        <img className="w-40" src={images.logo} alt="" />
      </div>
      <div className="menu__desktop  flex w-3/4 justify-center items-center p-10">
        <Menu />
      </div>
      <div className=" w-1/4 flex justify-around items-center px-5">
        <button
          style={{
            background: "black",
            color: "white",
            padding: "0.7rem 2rem",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
        <p className="text-3xl	">
          <AiOutlineShoppingCart />
        </p>
      </div>
      {/* <div className="flex w-full items-center">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div> */}
    </div>
  );
}

export default Header;
