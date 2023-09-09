import { useEffect, useState } from "react";
import { shopCart } from "../../utils/zustand";

interface PropsType {
  id: number;
  title: string;
  img: string;
  des: string;
  type: string;
  ifNew: boolean;
  price: string;
  feat: string;
  inBox: { [key: string]: string };
  proImg: string[];
}

const ProductComponent = ({
  id,
  title,
  img,
  des,
  type,
  ifNew,
  price,
  feat,
  inBox,
  proImg,
}: PropsType) => {
  const setCart = shopCart((state) => state.setCart);
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const renderInBox = () => {
    const elements = [];

    for (const key in inBox) {
      if (inBox.hasOwnProperty(key)) {
        const value = inBox[key];
        elements.push(
          <div key={key} className="flex gap-3">
            <span className="text-customOrange">{value}</span>
            {key}
          </div>
        );
      }
    }

    return elements;
  };

  const addProductToCart = () => {
    const product = {
      id,
      title,
      img,
      price,
      quantity: count,
    };
    setCart(product);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div key={id} className="flex flex-col gap-20">
      <div>
        <button onClick={() => window.history.back()} className="text-black/50">
          Go back
        </button>
      </div>
      <div className="w-full md:h-h720 lg:h-h560 flex flex-col lg:flex-row gap-5">
        <div className=" lg:hidden w-full lg:w-1/2 bg-customGray mb-10">
          <img
            src={img}
            className="w-w327 md:w-full md:h-h365 lg:h-h560 object-contain object-center"
          />
        </div>
        {type === "left" && (
          <div className="hidden lg:block lg:w-1/2 bg-customGray">
            <img
              src={img}
              className="h-h560 w-full object-contain object-center"
            />
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
              <button
                onClick={addProductToCart}
                className="bg-customOrange text-white w-40 h-12"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {type === "right" && (
          <div className="hidden lg:block lg:w-1/2 bg-customGray">
            <img
              src={img}
              className="h-h560 w-full object-contain object-center"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-6 w-full lg:w-fit">
          <h1 className="text-4xl">FEATURES</h1>
          <p>{feat}</p>
        </div>
        <div className="w-full lg:w-80 flex flex-col gap-6">
          <h1 className="text-4xl">IN THE BOX</h1>
          <div>{renderInBox()}</div>
        </div>
      </div>
      <div className="h-fit md:h-h368 lg:h-h592 flex flex-col md:flex-row gap-10 justify-center ">
        <div className="h-fit lg:h-h592 flex flex-col gap-5 justify-between ">
          <img
            src={proImg[0]}
            className="rounded-lg w-fit h-fit md:h-h174 lg:h-fit"
          />
          <img
            src={proImg[1]}
            className="rounded-lg w-fit h-fit md:h-h174 lg:h-fit"
          />
        </div>
        <img
          src={proImg[2]}
          className="w-fit h-fit md:w-w395 lg:w-w635 md:h-h368 lg:h-h592 rounded-lg "
        />
      </div>
    </div>
  );
};

export default ProductComponent;
