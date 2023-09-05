import HeaderNavLink from "./header.nav.link";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";

const HeaderNav = () => {
  return (
    <div className="flex justify-between py-8 border-b-px1 border-white/20">
      <Link to={"/"}>
        <img src={Logo} />
      </Link>
      <div className="flex gap-10">
        <HeaderNavLink link={"/"} title={"HOME"} />
        <HeaderNavLink link={"/"} title={"HEADPHONES"} />
        <HeaderNavLink link={"/"} title={"SPEAKERS"} />
        <HeaderNavLink link={"/"} title={"EARPHONES"} />
      </div>
      <button className="text-white">
        <img src={Cart} />
      </button>
    </div>
  );
};

export default HeaderNav;
