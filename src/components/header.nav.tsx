import HeaderNavLink from "./header.nav.link";

const HeaderNav = () => {
  return (
    <div>
      <h1></h1>
      <div className="flex gap-3">
        <HeaderNavLink link={"/"} title={"HOME"} />
        <HeaderNavLink link={"/"} title={"HEADPHONES"} />
        <HeaderNavLink link={"/"} title={"SPEAKERS"} />
        <HeaderNavLink link={"/"} title={"EARPHONES"} />
      </div>
      <button>Cart</button>
    </div>
  );
};

export default HeaderNav;
