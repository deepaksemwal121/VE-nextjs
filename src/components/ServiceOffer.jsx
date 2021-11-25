import React from "react";
import Card from "../reUseComponent/Card";

const ServiceOffer = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-3xl md:text-5xl  uppercase">Our Offerings</p>
      </div>
      <div className=" w-full grid grid-col-1 justify-center md:place-items-center md:gap-x-0 md:grid md:grid-cols-3 md:px-10">
        <Card
          image="https://proactiveforher.com/static/media/clinics.a785a12a.png"
          heading="Health Clinics"
        />
        <Card
          image="https://proactiveforher.com/static/media/clinics.a785a12a.png"
          heading="Health Clinics"
        />
        <Card
          image="https://proactiveforher.com/static/media/clinics.a785a12a.png"
          heading="Health Clinics"
        />
      </div>
    </div>
  );
};

export default ServiceOffer;
