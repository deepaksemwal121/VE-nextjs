import { ImLeaf } from "react-icons/im";

const SmallCard = () => {
  return (
    <div>
      <div
        className="card bg-gray-400 flex w-1/6
       items-center text-center flex-col align-middle p-8 rounded mx-10 shadow-md"
      >
        <ImLeaf className="w-20 h-20" />
        <p>100% Ayurvedic Treatment</p>
      </div>
    </div>
  );
};

export default SmallCard;
