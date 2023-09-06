import CategoryHeader from "../components/category/category.header";
import HeadPhonesPage from "../components/category/headphones.page";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  return (
    <div>
      <CategoryHeader />
      {category === "headphones" && <HeadPhonesPage />}
    </div>
  );
};

export default Category;
