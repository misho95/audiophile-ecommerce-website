import { useEffect, useState } from "react";

interface PropsType {
  id: number;
  title: string;
  img: string;
  des: string;
  type: string;
  ifNew: boolean;
  price: string;
}

const ProductComponent = ({
  id,
  title,
  img,
  des,
  type,
  ifNew,
  price,
}: PropsType) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      key={id}
      className="w-full md:h-h720 lg:h-h560 flex flex-col lg:flex-row gap-5"
    >
      <div className=" lg:hidden w-full lg:w-1/2 bg-customGray">
        <img
          src={img}
          className="w-w327 md:w-full md:h-h365 lg:h-h560 object-contain"
        />
      </div>
      {type === "left" && (
        <div className="hidden lg:block lg:w-1/2 bg-customGray">
          <img src={img} className="h-h560 w-full object-contain" />
        </div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="w-w327 md:w-w445 h-h365  flex flex-col gap-8 justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left">
          {ifNew && <h3 className="text-customOrange">NEW PRODUCT</h3>}
          <h1 className="text-4xl">{title}</h1>
          <p className="text-black/50">{des}</p>
          <span className="font-bold text-lg">{price}</span>
          <div className="flex gap-10">
            <div className="w-w120 h-12 bg-customGray rounded-md flex justify-between">
              <button
                onClick={decrease}
                className="w-10 flex justify-center items-center text-black/25"
              >
                -
              </button>
              <span className="w-10 flex justify-center items-center font-bold">
                {count}
              </span>
              <button
                onClick={increase}
                className="w-10 flex justify-center items-center text-black/25"
              >
                +
              </button>
            </div>
            <button className="bg-customOrange text-white w-40 h-12">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {type === "right" && (
        <div className="hidden lg:block lg:w-1/2 bg-customGray">
          <img src={img} className="h-h560 w-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
