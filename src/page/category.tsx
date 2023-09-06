import CategoryHeader from "../components/category/category.header";
import HeadPhonesPage from "../components/category/headphones.page";
import { useParams } from "react-router-dom";
import CategoryList from "../components/home/category.list";
import AdsComponent from "../components/ads.component";
import Footer from "../components/footer";

const Category = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-col gap-10">
      <CategoryHeader />
      {category === "headphones" && <HeadPhonesPage />}
      <CategoryList />
      <AdsComponent />
      <Footer />
    </div>
  );
};

export default Category;
