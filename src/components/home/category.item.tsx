import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const CategoryItem = ({ imgLink, category }) => {
  return (
    <div className="w-full h-full md:w-w223 md:h-h217 lg:h-h284 lg:w-px350 relative flex flex-col justify-center items-center bg-customGray p-6">
      <img src={imgLink} className="w-32 h-40 object-cover" />
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-semibold">{category}</h1>
        <button className="text-sm text-black/50 flex gap-2 justify-center items-center">
          Shop
          <img src={IconArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
