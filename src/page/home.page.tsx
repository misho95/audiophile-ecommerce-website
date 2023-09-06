import Footer from "../components/footer";
import CategoryList from "../components/home/category.list";
import HomeHeader from "../components/home/home.header";
import ProductComponent from "../components/home/product.component";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <HomeHeader />
      <CategoryList />
      <ProductComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
