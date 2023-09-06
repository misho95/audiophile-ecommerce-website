import ProductComponent from "./product.component";
import XX99IMG2 from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99IMG1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59IMG from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

const HeadPhonesPage = () => {
  const dataObject = [
    {
      id: 1,
      img: XX99IMG2,
      title: "XX99 Mark II Headphones",
      ifNew: true,
      des: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      id: 2,
      img: XX99IMG1,
      title: "XX99 Mark I Headphones",
      ifNew: false,
      des: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      id: 3,
      img: XX59IMG,
      title: "XX59 Headphones",
      ifNew: false,
      des: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col gap-6">
        {dataObject.map((pro, index) => {
          const type = index % 2 === 0 ? "left" : "right";
          return (
            <ProductComponent
              type={type}
              key={pro.id}
              id={pro.id}
              img={pro.img}
              title={pro.title}
              des={pro.des}
              ifNew={pro.ifNew}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeadPhonesPage;
