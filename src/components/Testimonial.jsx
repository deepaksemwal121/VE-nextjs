import TestimonialCard from "../reUseComponent/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";

const Testimonial = () => {
  return (
    <div className=" px-10 py-4 md:px-44 md:py-16">
      <h2 className="text-center font-semibold text-2xl md:text-4xl">
        HEAR OUR CUSTOMERS SPEAK
      </h2>
      <div className=" flex my-10"></div>
      <Swiper
        className="p-10"
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
