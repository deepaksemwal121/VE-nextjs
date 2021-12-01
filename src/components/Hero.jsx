import { images } from "../constants/constant";

const Hero = () => {
  return (
    <div>
      <div className="hero flex justify-center  mx-10 my-5">
        <img src={images.hero} className="w-full h-72 rounded-xl" alt="" />
      </div>
    </div>
  );
};

export default Hero;
