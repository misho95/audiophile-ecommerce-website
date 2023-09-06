import speakerHome from "../../assets/home/desktop/image-speaker-zx9.png";
import speakerHomeTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import SpeakerHomeMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import Pattern from "../../assets/home/desktop/pattern-circles.svg";

const ProductComponent = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth ">
        <div className="w-full h-h600 md:h-h720 lg:h-h560 bg-customOrange rounded-lg relative overflow-hidden">
          <img
            src={Pattern}
            className="absolute md:-top-40 lg:-left-24 lg:top-0 z-0"
          />
          <img
            src={speakerHome}
            className="h-h493 absolute z-20 left-40 -bottom-4 hidden lg:block"
          />
          <img
            src={speakerHomeTablet}
            className="absolute h-h284 left-1/2 -translate-x-1/2 top-10 hidden md:block lg:hidden"
          />
          <img
            src={SpeakerHomeMobile}
            className="absolute sm:hidden h-h217 left-1/2 -translate-x-1/2 top-10"
          />
          <div className="w-full md:w-80 flex flex-col justify-start items-center lg:items-start gap-8 absolute bottom-10 md:bottom-10 md:left-1/2 md:-translate-x-1/2 lg:right-24 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:left-auto">
            <h1 className="text-white text-4xl md:text-5xl text-center lg:text-left">
              ZX9 SPEAKER
            </h1>
            <p className="text-white/75 text-center lg:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="bg-customDarkGray w-40 h-12 text-white">
              See Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
