import Header from "../components/Header";
import Programs from "../components/Programs";
import ServiceHeader from "../components/ServiceHeader";
import ServiceOffer from "../components/ServiceOffer";
import Testimonial from "../components/Testimonial";

const services = () => {
  return (
    <div>
      <Header />
      <ServiceHeader />
      <ServiceOffer />
      <Programs
        heading="Lorem Ipsum Dolar Club is"
        description="Vedic Elements is a digital platform for diabetic patient, offering accessible, personalized and confidential healthcare solutions."
      />
      <Testimonial />
    </div>
  );
};

export default services;
