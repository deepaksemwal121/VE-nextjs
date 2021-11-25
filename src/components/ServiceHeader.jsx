import { BsCircleFill } from "react-icons/bs";
import { images } from "../constants/constant";

const ServiceHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center  py-5">
        <p className="text-3xl md:text-5xl  text-center">
          DIABETES HEALTH PLATFORM
        </p>
        <div className=" hidden md:grid md:place-items-center">
          <div className="flex">
            <div className="flex items-center p-2">
              <div className="rounded-full bg-gray bg-yellow-200  w-4 h-4 mr-4"></div>
              <p className="text-center text-lg">Zero Side-effects</p>
            </div>
            <div className="flex items-center p-2">
              <div className="rounded-full bg-gray bg-yellow-200  w-4 h-4 mr-4"></div>
              <p className="text-center text-lg">Ayurvedic</p>
            </div>
            <div className="flex items-center p-2">
              <div className="rounded-full bg-gray bg-yellow-200  w-4 h-4 mr-4"></div>
              <p className="text-center text-lg">Liberal</p>
            </div>
            <div className="flex items-center p-2">
              <div className="rounded-full bg-gray bg-yellow-200 w-4 h-4 mr-4"></div>
              <p className="text-center text-lg">Liberal</p>
            </div>
          </div>
        </div>
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
