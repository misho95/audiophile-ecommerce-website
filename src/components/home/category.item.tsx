import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

interface PropsType {
  imgLink: string;
  category: string;
}

const CategoryItem = ({ imgLink, category }: PropsType) => {
  return (
    <div className="w-full h-full md:w-w223 md:h-h217 lg:h-h284 lg:w-px350 relative flex flex-col justify-center items-center bg-customGray p-6">
      <img src={imgLink} className="w-32 h-40 object-cover" />
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-semibold">{category.toUpperCase()}</h1>
        <Link
          to={`/category/${category}`}
          className="text-sm text-black/50 flex gap-2 justify-center items-center"
        >
          Shop
          <img src={IconArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
