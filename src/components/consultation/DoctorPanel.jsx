import { AiFillStar } from "react-icons/ai";
const DoctorPanel = ({ dname, dimage, dtitle }) => {
  return (
    <div className=" shadow-2xl bg-white rounded-2xl my-5 p-10">
      <div className="flex flex-col items-center ">
        <img src={dimage} alt="" className=" " />
        <div className="rating flex space-x-1 w-20 bg-yellow-700 rounded-3xl p-3 -my-3 items-center">
          <AiFillStar className="text-white text-lg" />
          <p className="text-white">4.6</p>
        </div>
        <h1 className="text-xl my-3">{dname}</h1>
        <p>{dtitle}</p>
      </div>
    </div>
  );
};

export default DoctorPanel;
