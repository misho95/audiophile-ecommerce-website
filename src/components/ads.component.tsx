import addImg from "../assets/shared/desktop/image-best-gear.jpg";
import addImgTablet from "../assets/shared/tablet/image-best-gear.jpg";
import addImgMobile from "../assets/shared/mobile/image-best-gear.jpg";

const AdsComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex h-h720 md:h-h654 lg:h-h588 flex-col gap-10 lg:flex-row">
        <div className="lg:hidden w-full h-h295">
          <img
            src={addImgTablet}
            className="hidden md:block w-full h-full rounded-lg"
          />
          <img
            src={addImgMobile}
            className="w-full h-full rounded-lg sm:hidden"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-10 w-full lg:w-w445 h-h295">
            <h1 className="text-5xl text-center lg:text-left">
              Bringing you the <span className="text-customOrange">best</span>{" "}
              audio gear
            </h1>
            <p className="text-black/50 text-center lg:text-left">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <img src={addImg} className="w-fit h-fit rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AdsComponent;
