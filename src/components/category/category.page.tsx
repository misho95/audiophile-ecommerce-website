import ProductComponent from "./product.component";
import { dataType } from "../../utils/zustand";

interface PropsType {
  dataObject: dataType[] | undefined;
}

const CategoryPage = ({ dataObject }: PropsType) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col gap-6">
        {dataObject?.map((pro, index) => {
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

export default CategoryPage;
