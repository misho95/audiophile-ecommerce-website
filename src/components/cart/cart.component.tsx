import CartItem from "./cart.items";
import { shopCart } from "../../utils/zustand";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const cart = shopCart((state) => state.cart);
  const clearCart = shopCart((state) => state.clearCart);

  const calculateCartNumber = () => {
    const reduceQuantity = cart.reduce((val, el) => {
      return (val += el.quantity);
    }, 0);
    return reduceQuantity;
  };

  const calculateTotalPrice = () => {
    const reducePrice = cart.reduce((val, el) => {
      const price = el.price.slice(1);
      const newPrice = price.replace(",", "");
      return (val += +newPrice * el.quantity);
    }, 0);

    const addCommas = addCommasBackwards(reducePrice);
    return addCommas;
  };

  function addCommasBackwards(num: number) {
    // Convert the number to a string and reverse it
    const numStr = num.toString().split("").reverse().join("");

    // Use regex to add commas every third place
    const formattedStr = numStr.replace(/(\d{3})(?=\d)/g, "$1,");

    // Reverse the string again to get the final result
    const result = formattedStr.split("").reverse().join("");

    return result;
  }

  return (
    <div className="w-full md:w-w377 absolute  right-0 top-20 p-6 bg-white rounded-md z-50 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="text-lg font-semibold">
          Cart({calculateCartNumber()})
        </div>
        <button onClick={() => clearCart()} className="text-black/50">
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {cart.length > 0 &&
          cart.map((data) => {
            return (
              <CartItem
                key={data.id}
                id={data.id}
                title={data.title}
                img={data.img}
                price={data.price}
                quantity={data.quantity}
              />
            );
          })}
        {cart.length === 0 && (
          <div className="text-center text-lg font-semibold">
            Cart is empty!
          </div>
        )}
      </div>
      <div className="flex justify-between gap-5">
        <div className="text-black/50">Total</div>
        <div className="font-semibold">${calculateTotalPrice()}</div>
      </div>
      <Link
        to={`${cart.length === 0 ? "" : "/checkout"}`}
        className="bg-customOrange h-h48 text-white flex justify-center items-center"
      >
        CHECKOUT
      </Link>
    </div>
  );
};

export default CartComponent;
