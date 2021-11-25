import { BsCircleFill } from "react-icons/bs";
import { images } from "../constants/constant";

const ServiceHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center  py-5">
        <p className="text-3xl md:text-5xl  text-center">
          DIABETES HEALTH PLATFORM
        </p>
        <p className="border-b-2 w-2/3 hidden md:grid md:grid-cols-7 md:gap-0 md:place-items-center items-center my-3 p-4 ">
          <span className="mx-2 ">Trustworthy</span>
          <span>
            <BsCircleFill />
          </span>
          <span className="mx-2">Judgement-free</span>
          <span>
            <BsCircleFill />
          </span>
          <span className="mx-2">Judgement-free</span>
          <span>
            <BsCircleFill />
          </span>
          <span className="mx-2">Judgement-free</span>
        </p>
        <div className=" w-3/4 gap-4 grid grid-cols-1 md:grid-cols-2  place-items-center">
          <img src={images.serviceHead} />
          <div className="grid grid-cols-1 md:p-5">
            <p className="text-xl">
              Vedic Elements is a digital platform for diabetic patient,
              offering accessible, personalized and confidential healthcare
              solutions.
            </p>
            <button
              className=" md:w-1/2 my-5"
              style={{
                background: "black",
                color: "white",
                padding: "0.7rem 2rem",
                borderRadius: "5px",
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
