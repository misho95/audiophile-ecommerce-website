import { useParams } from "react-router-dom";
import ProductComponent from "../components/product/product.component";
import { useEffect, useState } from "react";
import ProductHeader from "../components/product/product.header";
import CategoryList from "../components/home/category.list";
import AdsComponent from "../components/ads.component";
import Footer from "../components/footer";
import { dataType } from "../utils/zustand";
import { productData } from "../utils/zustand";

const Product = () => {
  const { id } = useParams();
  const dataProduct = productData((state) => state.product);
  const [data, setData] = useState<dataType | undefined>();

  useEffect(() => {
    const findProduct = dataProduct.filter((pro) => {
      if (pro.id.toString() === id) {
        return pro;
      }
    });
    setData(findProduct[0]);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <ProductHeader />
      <div className="flex justify-center items-center">
        <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth">
          {data && (
            <ProductComponent
              type={"left"}
              key={data.id}
              id={data.id}
              img={data.img}
              title={data.title}
              des={data.des}
              ifNew={data.ifNew}
              price={data.price}
              feat={data.feat}
              inBox={data.inBox}
              proImg={data.proImg}
            />
          )}
        </div>
      </div>
      <CategoryList />
      <AdsComponent />
      <Footer />
    </div>
  );
};

export default Product;
