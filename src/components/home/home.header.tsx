import HeaderNav from "../header/header.nav";

const HomeHeader = () => {
  return (
    <div className="bg-customBlack h-headerDesktop flex justify-center items-start">
      <div className="w-full md:w-4/5 lg:w-customWidth h-full flex flex-col">
        <HeaderNav />
        <div
          className={`bg-[url('src/assets/home/mobile/image-header.jpg')] md:bg-[url('src/assets/home/tablet/image-header.jpg')] lg:bg-[url('src/assets/home/desktop/image-hero.jpg')]  w-full h-full bg-center bg-contain flex justify-center lg:justify-start items-center bg-no-repeat`}
        >
          <div className="w-11/12 md:w-full flex flex-col gap-10 lg:w-96 justify-center items-center lg:justify-normal lg:items-start text-center lg:text-left">
            <h3 className="text-lg text-gray-500">NEW PRODUCT</h3>
            <h1 className="text-5xl text-white">XX99 MARK II HEADPHONES</h1>
            <p className="text-gray-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="bg-customOrange w-40 h-12 text-white">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
