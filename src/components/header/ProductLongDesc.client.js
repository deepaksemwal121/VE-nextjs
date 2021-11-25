import { getURL } from "next/dist/shared/lib/utils";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { images } from "../../constants/constant";

const ProductLongDesc = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const helpsData = [
    {
      title: "TRETS DIABETES & LOWER BLOOD SUGAR LEVELS",
      desc: "DiaHerb maintains normal blood glucose level in the body, effectively treats & controls diabetes mellitus and prevents it from acute complication.",
      image: images.helps1,
    },
    {
      title: "INCREASES INSULIN GROWTH",
      desc: "DiaHerb has significant role in the growth of insulin secretion and it regenerates cell which have a greater contribution to reducing blood sugar levels",
      image: images.helps2,
    },
    {
      title: "PURIFIES BLOOD",
      desc: "DiaHerb purifies the blood, detoxifies the body and strengthen the body’s resistance power and build a robust immune system",
      image: images.helps3,
    },
    {
      title: "INCREASES GOOD CHOLESTEROL",
      desc: "DiaHerb is beneficial in reducing bad LDL cholesterol levels. It improved fat absorption and lipid levels hence reducing blood sugar levels.",
      image: images.helps4,
    },
    {
      title: "BOOSTS IMMUNITY",
      desc: "DiaHerb boosts the immune system helping the body’s ability to fight all kind of infection",
      image: images.helps5,
    },
    {
      title: "ANTI-INFLAMMATORY",
      desc: "DiaHerb is nature’s premium anti-inflammatory agent. It contains tannins and saponins compounds which lessen the inflammation in the body",
      image: images.helps6,
    },
  ];

  return (
    <div>
      {/* Testimonials */}
      <div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          organicArrows={false}
          mobileTouch
          interval={6000}
        >
          <div data-src={images.testimonial1} />
          <div data-src={images.testimonial2} />
          <div data-src={images.testimonial3} />
          <div data-src={images.testimonial4} />
        </AutoplaySlider>
      </div>
      {/* how it helps section */}
      <div className="mt-12 bg-site-color py-8">
        <div className="text-3xl font-semibold text-center">How It Helps ?</div>
        <div className="text-sm lowercase font-medium text-gray-900 text-center">
          ONE REMEDY MULTIPLE BENEFITS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center container">
          {helpsData.map((item) => {
            return (
              <div className="flex flex-col items-center text-center my-4">
                <img className="w-1/2 rounded-full" src={item.image} />
                <div className="my-2 text-xs text-gray-700 font-medium">
                  {item.title}
                </div>
                <p className="text-gray-700 text-xs w-3/4">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* who should take it section */}
      <div className="py-4 md:py-14  px-4 md:px-24 grid grid-cols-1 md:grid-cols-2">
        <div className="my-3">
          <div className="text-xl font-medium">Who Should Take It ?</div>
          <ul>
            <li className="text-sm my-2 text-gray-700">
              <strong>Pre-diabetes:</strong>Occurs when your blood sugar is
              higher than normal, but it’s not high enough for a diagnosis of
              type 2 diabetes.
            </li>
            <li className="text-sm my-2 text-gray-700">
              <strong>Type 2 diabetes:</strong>Occurs when your body becomes
              resistant to insulin, and sugar builds up in your blood.
            </li>
            <li className="text-sm my-2 text-gray-700">
              <strong>Type 1 diabetes:</strong>The immune system attacks and
              destroys cells in the pancreas, where insulin is made. It’s
              unclear what causes this attack. About 10 % of people with
              diabetes have this type.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-full md:w-3/4 h-full"
            width=""
            height=""
            src="https://www.youtube.com/embed/AM5MgWN5C8c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* sourced from nature section */}
      <div
        style={{
          backgroundImage: `url(${images.sourced})`,
          backgroundSize: "cover",
        }}
        className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  px-24 py-14"
      >
        hello workd
      </div>
    </div>
  );
};
export default ProductLongDesc;
