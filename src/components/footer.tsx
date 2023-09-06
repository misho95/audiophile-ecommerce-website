import Logo from "../assets/shared/desktop/logo.svg";
import faceBookIcon from "../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-customBlack w-full h-h654 sm:h-h365 flex justify-center">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col justify-center sm:justify-normal relative gap-10 py-16">
        <div className="absolute bg-customOrange h-1 w-28 top-0 left-0"></div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center sm:items-start gap-10">
          <img src={Logo} className="w-fit h-fit" />
          <div className="text-white flex flex-col sm:flex-row gap-5 justify-center items-center sm:justify-normal sm:items-start">
            <Link to="/">HOME</Link>
            <Link to="/category/headphones">HEADPHONES</Link>
            <Link to="/category/speakers">SPEAKERS</Link>
            <Link to="/category/earphones">EARPHONES</Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-10 text-center sm:text-left">
            <p className="text-white/50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="text-white/50">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="w-full sm:w-1/2 flex gap-5 justify-center sm:justify-end md:items-end lg:items-start">
            <img src={faceBookIcon} className="w-fit h-fit" />
            <img src={instagramIcon} className="w-fit h-fit" />
            <img src={twitterIcon} className="w-fit h-fit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
