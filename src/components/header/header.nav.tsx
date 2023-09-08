import HeaderNavLink from "./header.nav.link";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import iconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { useEffect, useState } from "react";
import CategoryList from "../home/category.list";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import CartComponent from "../cart/cart.component";
import { shopCart } from "../../utils/zustand";

const HeaderNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const cart = shopCart((state) => state.cart);

  const calculateCartNumber = () => {
    const reduceQuantity = cart.reduce((val, el) => {
      return (val += el.quantity);
    }, 0);
    setCartCount(reduceQuantity);
  };

  useEffect(() => {
    calculateCartNumber();
  }, [cart]);

  useEffect(() => {
    openNav
      ? disableBodyScroll(document.documentElement)
      : enableBodyScroll(document.documentElement);
    cartOpen
      ? disableBodyScroll(document.documentElement)
      : enableBodyScroll(document.documentElement);
  }, [openNav, cartOpen]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-11/12 sm:w-full flex justify-between py-8 border-b-px1 border-white/20 bg-customBlack relative">
        <div className="flex gap-5">
          <button onClick={() => setOpenNav(!openNav)} className="lg:hidden">
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
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="text-white relative"
        >
          <img src={Cart} />
          {cartCount !== 0 && (
            <div className="text-sm bg-customOrange w-4 h-4 rounded-full absolute -top-1 -right-2 flex justify-center items-center">
              {cartCount}
            </div>
          )}
        </button>
        {cartOpen && (
          <>
            <div
              onClick={() => setCartOpen(false)}
              className="w-full h-screen bg-black/50 fixed left-0 top-custom z-20"
            ></div>
            <CartComponent />
          </>
        )}
      </div>
      {openNav && (
        <div className="bg-black/50 w-full h-full absolute top-20 z-50">
          <div className="bg-customGray w-full">
            <CategoryList />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNav;
