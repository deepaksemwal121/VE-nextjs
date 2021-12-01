import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarousel = ({ productImg }) => {
  return (
    <div>
      <Swiper className="">
        {productImg.map((item) => {
          return (
            <SwiperSlide
              className=" "
              style={{ width: "500px", height: "500px" }}
            >
              <img
                style={{
                  padding: "1rem",
                  objectFit: "cover",
                  height: "500px",
                  width: "500px",
                  borderRadius: "1.2rem",
                }}
                src={item.node.originalSrc}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
