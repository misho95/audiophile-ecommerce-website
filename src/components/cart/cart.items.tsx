import { useState, useEffect } from "react";
import { shopCart } from "../../utils/zustand";

interface PropsType {
  id: number;
  img: string;
  title: string;
  price: string;
  quantity: number;
}

const CartItem = ({ id, title, img, price, quantity }: PropsType) => {
  const [count, setCount] = useState(quantity);
  const updateCount = shopCart((state) => state.updateQuantity);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    updateCount(id, count);
  }, [count]);

  return (
    <div key={id} className="flex justify-between w-full items-center gap-5">
      <div className="flex justify-center items-center gap-3">
        <img src={img} className="w-w64 h-h-64" />
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-black/50">{price}</p>
        </div>
      </div>
      <div className="w-w96 h-h32 bg-customGray rounded-md flex">
        <button
          onClick={decrease}
          className="w-1/3 flex justify-center items-center text-black/50"
        >
          -
        </button>
        <span className="w-1/3 flex justify-center items-center font-semibold">
          {count}
        </span>
        <button
          onClick={increase}
          className="w-1/3 flex justify-center items-center text-black/50"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
