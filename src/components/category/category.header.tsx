import HeaderNav from "../header/header.nav";
import { useParams } from "react-router-dom";

const CategoryHeader = () => {
  const { category } = useParams();

  return (
    <div className="bg-customBlack h-80 flex justify-center items-start">
      <div className="w-full md:w-4/5 lg:w-customWidth h-full flex flex-col">
        <HeaderNav />
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-4xl text-white">{category?.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
