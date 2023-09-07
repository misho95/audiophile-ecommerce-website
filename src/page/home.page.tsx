import { useEffect } from "react";
import AdsComponent from "../components/ads.component";
import Footer from "../components/footer";
import CategoryList from "../components/home/category.list";
import HomeHeader from "../components/home/home.header";
import ProductComponent from "../components/home/product.component";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <HomeHeader />
      <CategoryList />
      <ProductComponent />
      <AdsComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
