import HeaderNav from "./header.nav";
import HeadPhonesImage from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";

const Header = () => {
  return (
    <div className="bg-customBlack h-headerDesktop flex justify-center items-start">
      <div className="w-customWidth flex flex-col">
        <HeaderNav />
        <div>
          <div>text</div>
          <div>
            <img src={HeadPhonesImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
