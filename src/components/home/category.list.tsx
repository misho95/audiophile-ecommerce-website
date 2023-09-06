import CategoryItem from "./category.item";
import categoryImg1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import categoryImg2 from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import categoryImg3 from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

const CategoryList = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col sm:flex-row justify-between gap-3">
        <CategoryItem imgLink={categoryImg1} category={"HEADPHONES"} />
        <CategoryItem imgLink={categoryImg2} category={"EARPHONES"} />
        <CategoryItem imgLink={categoryImg3} category={"SPEAKERS"} />
      </div>
    </div>
  );
};

export default CategoryList;
