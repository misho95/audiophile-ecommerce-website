import HeaderNavLink from "./header.nav.link";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import iconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";

const HeaderNav = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-11/12 sm:w-full flex justify-between py-8 border-b-px1 border-white/20 bg-customBlack">
        <div className="flex gap-5">
          <button className="lg:hidden">
            <img src={iconHamburger} />
          </button>
          <Link to={"/"}>
            <img src={Logo} />
          </Link>
        </div>
        <div className="hidden lg:flex gap-10">
          <HeaderNavLink link={"/"} title={"HOME"} />
          <HeaderNavLink link={"/category/headphones"} title={"HEADPHONES"} />
          <HeaderNavLink link={"/category/speakers"} title={"SPEAKERS"} />
          <HeaderNavLink link={"/category/earphones"} title={"EARPHONES"} />
        </div>
        <button className="text-white">
          <img src={Cart} />
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
