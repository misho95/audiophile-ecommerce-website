import { useParams } from "react-router-dom";
import ProductComponent from "../components/product/product.component";
import XX99IMG2 from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99IMG1 from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59IMG from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import ZX9IMG from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7IMG from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import YX1IMG from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import { useEffect, useState } from "react";
import ProductHeader from "../components/product/product.header";
import CategoryList from "../components/home/category.list";
import AdsComponent from "../components/ads.component";
import Footer from "../components/footer";
import { dataType } from "./category";

const Product = () => {
  const dataObject = [
    {
      id: 1,
      img: XX99IMG2,
      title: "XX99 Mark II Headphones",
      ifNew: true,
      category: "headphones",
      price: "$2,999",
      des: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      id: 2,
      img: XX99IMG1,
      title: "XX99 Mark I Headphones",
      ifNew: false,
      category: "headphones",
      price: "$1,999",
      des: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      id: 3,
      img: XX59IMG,
      title: "XX59 Headphones",
      ifNew: false,
      category: "headphones",
      price: "$999",
      des: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
    {
      id: 4,
      img: ZX9IMG,
      title: "ZX9 SPEAKER",
      ifNew: true,
      category: "speakers",
      price: "$499",
      des: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      id: 5,
      img: ZX7IMG,
      title: "ZX7 SPEAKER",
      ifNew: false,
      category: "speakers",
      price: "$599",
      des: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
    {
      id: 6,
      img: YX1IMG,
      title: "YX1 WIRELESS EARPHONES",
      ifNew: true,
      category: "earphones",
      price: "$399",
      des: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ];

  const { id } = useParams();
  const [data, setData] = useState<dataType | undefined>();

  useEffect(() => {
    const findProduct = dataObject.filter((pro) => {
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
