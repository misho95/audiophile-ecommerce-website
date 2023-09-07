import HeaderNav from "../header/header.nav";

const ProductHeader = () => {
  return (
    <div className="bg-customBlack h-fit flex justify-center items-start w-full">
      <div className="w-full md:w-4/5 lg:w-customWidth h-full flex flex-col">
        <HeaderNav />
      </div>
    </div>
  );
};

export default ProductHeader;
