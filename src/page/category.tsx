import CategoryHeader from "../components/category/category.header";
import CategoryPage from "../components/category/category.page";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryList from "../components/home/category.list";
import AdsComponent from "../components/ads.component";
import Footer from "../components/footer";
import { dataType, productData } from "../utils/zustand";

const Category = () => {
  const { category } = useParams();
  const dataProduct = productData((state) => state.product);
  const [data, setData] = useState<dataType[] | undefined>();

  useEffect(() => {
    const filter = dataProduct.filter((data) => {
      if (data.category === category) {
        return data;
      }
    });
    setData(filter);

    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="flex flex-col gap-10">
      <CategoryHeader />
      <CategoryPage dataObject={data} />
      <CategoryList />
      <AdsComponent />
      <Footer />
    </div>
  );
};

export default Category;
