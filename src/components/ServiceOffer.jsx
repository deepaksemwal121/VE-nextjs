import React from "react";
import Card from "../reUseComponent/Card";
import Programs from "./Programs";

const ServiceOffer = () => {
  return (
    <div className="px-10 py-6 lg:px-30 lg:py-16">
      <div className="text-center">
        <p className="text-3xl md:text-5xl  uppercase">Our Offerings</p>
      </div>
      <div className=" w-full grid grid-col-1 justify-center my-16 md:place-items-center md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-4 md:px-10">
        <Card
          image="https://cdn.dribbble.com/users/1346253/screenshots/7996002/nutritionist-2_4x.jpg"
          heading="Nutriotionist"
        />
        <Card
          image="https://cdn.dribbble.com/users/5850535/screenshots/14722203/media/15f83b70f8666a23cf4252e867865786.jpg"
          heading="Yoga Instructor"
        />
        <Card
          image="https://cdn.dribbble.com/users/910268/screenshots/11901454/media/3a8cab93735e1d2b20ed6929f8e0e308.png"
          heading="Tele Consultations"
        />
        <Card
          image="https://cdn.dribbble.com/users/3956545/screenshots/11140860/_________________________4x.png"
          heading="Psychologist"
        />
      </div>
    </div>
  );
};

export default ServiceOffer;
