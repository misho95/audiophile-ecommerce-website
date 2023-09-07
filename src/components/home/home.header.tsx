import HeaderNav from "../header/header.nav";
import Button from "./button";

const HomeHeader = () => {
  return (
    <div className="bg-customBlack h-headerDesktop flex justify-center items-start">
      <div className="w-full md:w-4/5 lg:w-customWidth h-full flex flex-col">
        <HeaderNav />
        <div
          className={`bg-header_bg_mobile md:bg-header_bg_tablet lg:bg-header_bg_desktop  w-full h-full bg-center bg-contain flex justify-center lg:justify-start items-center bg-no-repeat`}
        >
          <div className="w-11/12 md:w-full flex flex-col gap-10 lg:w-96 justify-center items-center lg:justify-normal lg:items-start text-center lg:text-left">
            <h3 className="text-lg text-gray-500">NEW PRODUCT</h3>
            <h1 className="text-5xl text-white">XX99 MARK II HEADPHONES</h1>
            <p className="text-gray-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button type={"orange"} link="/product/1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
