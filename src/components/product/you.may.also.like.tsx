import { dataType, productData } from "../../utils/zustand";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface PropsType {
  id: string | undefined;
}

const YouMayAlsoLike = ({ id }: PropsType) => {
  const dataProduct = productData((state) => state.product);
  const [data, setData] = useState<dataType[] | undefined>();

  useEffect(() => {
    if (id) {
      const filter = dataProduct.filter((dat) => {
        if (dat.id !== +id) return dat;
      });

      if (filter) {
        setData(filter.slice(0, 3));
      }
    }
  }, [id]);

  interface ProductPropsType {
    id: number;
    img: string;
    title: string;
  }

  const Product = ({ id, img, title }: ProductPropsType) => {
    return (
      <div className="flex flex-col gap-5">
        <img src={img} className="rounded-md" />
        <span className="text-center font-semibold">{title}</span>
        <Link
          to={`/product/${id}`}
          className="bg-customOrange h-10 flex justify-center items-center text-white"
        >
          SEE PRODUCT
        </Link>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex h-fit md:h-h654 lg:h-h588 flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-10">
          <div className="text-center text-4xl">You May Also Like</div>
          <div className="flex gap-10 flex-col md:flex-row">
            {data &&
              data.map((d) => {
                return (
                  <Product key={d.id} id={d.id} img={d.img} title={d.title} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
