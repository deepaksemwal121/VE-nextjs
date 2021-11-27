const TestimonialCard = () => {
  return (
    <div className="md:pt-12 md:pl-12 inline-block relative carousel-item">
      <div className="max-w-sm">
        <p>
          I have had anxiety and stress issues for a year now. My consultation
          with psychologists at Proactive for her provided a safe space to
          openly converse about all aspects of my life. Their openness and
          friendly explanations made it easier to change my outlook towards my
          problems. After every session, I eagerly wait for the next one.
        </p>
        <div className="pt-7 flex items-center">
          <img
            className="w-16 h-16 rounded-full"
            src="https://pfh-images-production.s3.ap-south-1.amazonaws.com/files/images/546a0116-2a41-405f-a128-bd9c5bcf8939.webp"
            alt=""
          />
          <p className="text-base font-semibold mx-2">Riya Mahlotra</p>
        </div>
      </div>
      <div className="absolute -top-4 -right-4">
        <img
          className="h-20 w-full"
          src="https://proactiveforher.com/static/media/colin.8ceca7ac.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
