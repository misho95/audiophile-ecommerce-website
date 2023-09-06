import CategoryList from "../home/category.list";
import ProductComponent from "./product.component";

const HeadPhonesPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col pt-20 gap-10">
        <ProductComponent type={"left"} />
        <ProductComponent type={"right"} />
        <ProductComponent type={"left"} />
        <CategoryList />
      </div>
    </div>
  );
};

export default HeadPhonesPage;
