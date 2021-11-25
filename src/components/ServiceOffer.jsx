import React from "react";
import Card from "../reUseComponent/Card";
import Programs from "./Programs";

const ServiceOffer = () => {
  return (
    <div className="px-10 py-6 lg:px-30 lg:py-16">
      <div className="text-center">
        <p className="text-3xl md:text-5xl  uppercase">Our Offerings</p>
      </div>
      <div className=" w-full grid grid-col-1 justify-center my-16 md:place-items-center md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-10">
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
