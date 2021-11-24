import { useState } from "react";
const ProductShortDesc = () => {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <div className="my-1">
      <div className="text-base mb-2 font-medium text-gray-900">
        Control your diabetes with our ayurvedic medicine
      </div>
      <div className="flex justify-around">
        <div
          onClick={() => setactiveTab(0)}
          className={`text-base mb-2 font-medium text-gray-900 w-1/3 text-center p-2 m-1 rounded ${
            activeTab === 0 ? "bg-site-color" : "bg-gray-200"
          }`}
        >
          Benefits
        </div>
        <div
          onClick={() => setactiveTab(1)}
          className={`text-base mb-2 font-medium text-gray-900 w-1/3 text-center p-2 m-1 rounded ${
            activeTab === 1 ? "bg-site-color" : "bg-gray-200"
          }`}
        >
          Features
        </div>
        <div
          onClick={() => setactiveTab(2)}
          className={`text-base mb-2 font-medium text-gray-900 w-1/3 text-center p-2 m-1 rounded ${
            activeTab === 2 ? "bg-site-color" : "bg-gray-200"
          }`}
        >
          Herbs
        </div>
      </div>
      <div
        style={{ display: activeTab === 0 ? "block" : "none" }}
        className="rounded py-2 px-10 bg-gray-200"
      >
        <p className="text-sm lowercase my-3">
          TREAT DIABETES WITH THE GOODNESS OF NATURAL HERBS SCIENTIFICALLY
          PROVEN FORMULATION DESIGNED BY DOCTOR OF MEDICINE AYURVEDA DiaHerb
          Ayurveda Diabetes Medicine helps in following:
        </p>
        <ul>
          <li className="list-disc text-sm">
            Naturally regulates the secretion of insulin for better sugar
            control
          </li>
          <li className="list-disc text-sm">
            It helps to settle the symptoms of fatigue caused by diabetes in
            patients
          </li>
          <li className="list-disc text-sm">
            Prevents fluctuations in sugar levels
          </li>
          <li className="list-disc text-sm">Helps in skin related ailments</li>
          <li className="list-disc text-sm">Purifies Blood</li>
          <li className="list-disc text-sm">Boosts Immune System</li>
        </ul>
        <p className="text-sm lowercase my-3">
          This ayurvedic medicine for diabetes is used as an alternative to
          prevent complications that arise due to diabetes. DiaHerb is 100 %
          safe, natural and hygienically packed under expert supervision. It
          helps in natural management of diabetes without any side effects
        </p>
      </div>
      {/* second tab */}
      <div
        style={{ display: activeTab === 1 ? "block" : "none" }}
        className="rounded py-2 px-10 bg-gray-200"
      >
        <ul>
          <li className="text-sm">100% Plant based nutrition</li>
          <li className="text-sm">Clinically Tested</li>
          <li className="text-sm">Purity and Safety</li>
          <li className="text-sm">Meticulosly Sourced Herbs</li>
        </ul>
        <ul>
          <li className="text-base my-1">Packs</li>
          <li className="list-disc text-sm">1 Month Pack</li>
          <li className="list-disc text-sm">2 Month Pack</li>
          <li className="list-disc text-sm">3 Month Pack</li>
        </ul>
      </div>
      {/* third tab */}
      <div
        style={{ display: activeTab === 2 ? "block" : "none" }}
        className="rounded py-2 px-10 bg-gray-200"
      >
        <p className="text-sm lowercase my-3">
          This ayurvedic medicine for diabetes is used as an alternative to
          prevent complications that arise due to diabetes.
        </p>
        <ul>
          <li className="text-base my-1">Packs</li>
          <li className="list-disc text-sm">Chirata</li>
          <li className="list-disc text-sm">Gudmar</li>
          <li className="list-disc text-sm">Ajwain</li>
          <li className="list-disc text-sm">Methika</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductShortDesc;
