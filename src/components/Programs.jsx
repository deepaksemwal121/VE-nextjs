const Programs = ({ heading, description }) => {
  return (
    <div className=" px-10 py:8 md:px-40 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  container">
        <div className="image">
          <img
            src="https://proactiveforher.com/static/media/vaginismus.0d5df865.webp"
            alt=""
          />
        </div>
        <div className="place-items-center px-3 my-5 md:px-5 md:my-10 justify-center">
          <h3 className="text-xl md:text-3xl font-semibold">{heading}</h3>
          <p>{description}</p>
          <button className="bg-black rounded-md px-5 py-2 w-3/4  text-white my-4">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
