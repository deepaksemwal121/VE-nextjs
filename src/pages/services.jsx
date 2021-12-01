import Header from "../components/Header";
import Programs from "../components/Programs";
import ServiceHeader from "../components/ServiceHeader";
import ServiceOffer from "../components/ServiceOffer";
import Testimonial from "../components/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import DoctorPanel from "../components/consultation/DoctorPanel";

const services = () => {
  return (
    <div>
      <Header />
      <ServiceHeader />
      <ServiceOffer />
      <h2 className="text-2xl font-semibold md:text-5xl p-6 text-center">
        OUR ONGOING PROGRAMS
      </h2>
      <Swiper
        className="p-10"
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
      >
        <SwiperSlide>
          <Programs
            heading="3 Months Ayurvedic Reversal Plan "
            description="Vedic Elements is a digital platform for diabetic patient, offering accessible, personalized and confidential healthcare solutions."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Programs
            heading="3 Months Ayurvedic Management Plan "
            description="Vedic Elements is a digital platform for diabetic patient, offering accessible, personalized and confidential healthcare solutions."
          />
        </SwiperSlide>
      </Swiper>
      <Testimonial />
      <div className="container bg-yellow-700 px-20 py-10 mx-10 my-5 rounded-md flex flex-col items-center ">
        <h2 className="text-center text-white text-semibold text-3xl py-5">
          Not sure where to begin? Take our Personalized Wellness Assessment
        </h2>
        <p className="text-center text-white text-semibold py-5">
          Answer a few questions, book a consultation and get a customised
          treatment plan from our doctors
        </p>
        <a
          href="/consultation"
          className="bg-black rounded-md px-5 py-2 w-1/3 text-center  text-white my-4"
        >
          Take Self Health Assessment
        </a>
      </div>
      <div className="flex justify-center w-full my-10">
        <h2 className="text-2xl font-semibold md:text-5xl p-6 text-center">
          OUR EXPERT PANEL
        </h2>
      </div>
      <div className="DPanel px-20  grid grid-cols-4 gap-4">
        <DoctorPanel
          dname="Dr K Keshar"
          dtitle="Sr. Nutritionist"
          dimage="https://www.aimsindia.com/wp-content/uploads/2016/08/D-K-Kesar.png"
        />
        <DoctorPanel
          dname="Dr K Keshar"
          dtitle="Sr. Nutritionist"
          dimage="https://www.aimsindia.com/wp-content/uploads/2016/08/D-K-Kesar.png"
        />{" "}
        <DoctorPanel
          dname="Dr K Keshar"
          dtitle="Sr. Nutritionist"
          dimage="https://www.aimsindia.com/wp-content/uploads/2016/08/D-K-Kesar.png"
        />{" "}
        <DoctorPanel
          dname="Dr K Keshar"
          dtitle="Sr. Nutritionist"
          dimage="https://www.aimsindia.com/wp-content/uploads/2016/08/D-K-Kesar.png"
        />
      </div>
      <div className="program__details mx-10 my-5 px-20 py-10 ">
        <h2 className="text-3xl font-semibold text-center">
          The most effective Diabetes management program, with a triple
          combination approach:
        </h2>
        <div className="w-full grid grid-cols-2 mx-10 my-10">
          <div className="flex flex-col  align-middle">
            <ol className=" list-disc w-3/4 text-xl font-medium">
              <li>Diabetes nutrition and Ayurveda (Natural home remedies)</li>
              <li>Physiotherapy and Diabetes Yoga for pancreatic activation</li>
              <li>
                Medicine prescriptions &amp; guidance under senior doctors
              </li>
            </ol>
            <button className="bg-black rounded-md px-5 py-2 w-3/5  text-white my-4">
              Request Service
            </button>
          </div>
          <div className="flex flex-col  align-middle">
            <img src="https://zyla.in/programPages/features.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
