import Footer from "../components/footer";
import Input from "../components/input";
import InputCheckBox from "../components/input.checkbox";
import ProductHeader from "../components/product/product.header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shopCart } from "../utils/zustand";
import iconConfrim from "../assets/checkout/icon-order-confirmation.svg";

const CheckOut = () => {
  const cart = shopCart((state) => state.cart);
  const clearCart = shopCart((state) => state.clearCart);
  const [checked, setChecked] = useState(0);
  const [finish, setFinish] = useState(false);
  const navigate = useNavigate();

  function addCommasBackwards(num: number) {
    // Convert the number to a string and reverse it
    const numStr = num.toString().split("").reverse().join("");

    // Use regex to add commas every third place
    const formattedStr = numStr.replace(/(\d{3})(?=\d)/g, "$1,");

    // Reverse the string again to get the final result
    const result = formattedStr.split("").reverse().join("");

    return result;
  }

  const calculateTotalPrice = (plus) => {
    const reducePrice = cart.reduce((val, el) => {
      const price = el.price.slice(1);
      const newPrice = price.replace(",", "");
      return (val += +newPrice * el.quantity);
    }, 0);

    const addCommas = addCommasBackwards(reducePrice + plus);
    return addCommas;
  };

  const totalPrice = calculateTotalPrice(0);
  const grandTotal = calculateTotalPrice(50);

  const goBackHome = () => {
    clearCart();
    navigate("/");
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart]);

  const OrderFinished = () => {
    return (
      <div className="w-full h-screen bg-black/50 fixed top-0 left-0 z-50 flex justify-center items-center">
        <div className="bg-white rounded-md p-5 flex flex-col gap-5 w-11/12 md:w-w445">
          <div>
            <img src={iconConfrim} />
          </div>
          <div className="text-3xl">THANK YOU FOR YOUR ORDER</div>
          <p className="text-black/50">
            You will receive an email confirmation shortly.
          </p>
          <div className="flex h-h270">
            <div className="w-full bg-customGray rounded-l-md p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                {cart.slice(0, 3).map((c) => {
                  return (
                    <div key={c.id} className="flex gap-2 justify-between">
                      <div className="flex gap-3">
                        <img src={c.img} className="w-14 h-14 rounded-md" />
                        <div className="flex flex-col text-sm">
                          <span>{c.title}</span>
                          <span className="text-black/50">{c.price}</span>
                        </div>
                      </div>
                      <div className="text-black/50">X{c.quantity}</div>
                    </div>
                  );
                })}
              </div>
              <button className="text-black/70">View Less</button>
            </div>
            <div className="bg-black w-w198 rounded-r-md flex justify-center items-end pb-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-500">GRAND TOTAL</h3>
                <p className="text-white font-semibold">${grandTotal}</p>
              </div>
            </div>
          </div>
          <button
            onClick={goBackHome}
            className="bg-customOrange text-white py-2"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10 min-h-screen bg-customGray">
      {finish && <OrderFinished />}
      <ProductHeader />
      <div className="flex justify-center items-center">
        <div className="w-11/12 md:w-customTabletWidth lg:w-customWidth flex flex-col gap-6 justify-start items-start">
          <button
            onClick={() => window.history.back()}
            className="text-black/50"
          >
            Go back
          </button>
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full flex flex-col gap-10 bg-white rounded-md p-10">
              <h1 className="text-4xl">CHECKOUT</h1>
              {/* //billing */}
              <div className="flex flex-col gap-5">
                <h3 className="text-customOrange">BILLING DETAILS</h3>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <label className="flex flex-col gap-2 w-full">
                      <div>Name</div>
                      <Input type={"text"} placeHolder={"name"} error={false} />
                    </label>
                    <label className="flex flex-col gap-2  w-full">
                      <div>Phone Number</div>
                      <Input
                        type={"text"}
                        placeHolder={"+1 (202) 555-0136"}
                        error={false}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <label className="flex flex-col gap-2  w-full">
                      <div>Email Address</div>
                      <Input type={"text"} placeHolder={"email"} error={true} />
                    </label>
                  </div>
                </div>
              </div>
              {/* //shipping */}
              <div className="flex flex-col gap-5">
                <h3 className="text-customOrange">SHIPPING INFO</h3>
                <div>
                  <label className="flex flex-col gap-2 w-full">
                    <div>Address</div>
                    <Input
                      type={"text"}
                      placeHolder={"1137 Williams Avenue"}
                      error={false}
                    />
                  </label>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <label className="flex flex-col gap-2 w-full">
                      <div>ZIP Code</div>
                      <Input
                        type={"text"}
                        placeHolder={"10001"}
                        error={false}
                      />
                    </label>
                    <label className="flex flex-col gap-2  w-full">
                      <div>Country</div>
                      <Input
                        type={"text"}
                        placeHolder={"United States"}
                        error={false}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <label className="flex flex-col gap-2  w-full">
                      <div>City</div>
                      <Input
                        type={"text"}
                        placeHolder={"New York"}
                        error={false}
                      />
                    </label>
                  </div>
                </div>
              </div>
              {/* /payment */}
              <div className="flex flex-col gap-5">
                <h3 className="text-customOrange">BILLING DETAILS</h3>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex flex-col gap-5 w-1/2">
                    <p>Payment Method</p>
                  </div>
                  <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <label className="flex flex-col gap-2  w-full">
                      <InputCheckBox
                        id={1}
                        paymentMethod={"e-Money"}
                        setChecked={setChecked}
                        checked={checked}
                      />
                    </label>
                    <label className="flex flex-col gap-2  w-full">
                      <InputCheckBox
                        id={2}
                        paymentMethod={"Cash on Delivery"}
                        setChecked={setChecked}
                        checked={checked}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-px350 bg-white rounded-md p-5 flex flex-col gap-6">
              <div>SUMMARY</div>
              <div className="flex flex-col gap-4">
                {cart.map((c) => {
                  return (
                    <div key={c.id} className="flex gap-2 justify-between">
                      <div className="flex gap-3">
                        <img src={c.img} className="w-14 h-14 rounded-md" />
                        <div className="flex flex-col text-sm">
                          <span>{c.title}</span>
                          <span className="text-black/50">{c.price}</span>
                        </div>
                      </div>
                      <div className="text-black/50">X{c.quantity}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between gap-3">
                    <span className="text-black/50">TOTAL</span>
                    <span className="font-semibold">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-black/50">SHIPPING</span>
                    <span className="font-semibold">$50</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-black/50">{"VAT(INCLUDED)"}</span>
                    <span className="font-semibold">$1,079</span>
                  </div>
                  <div className="flex justify-between gap-3 mt-3">
                    <span className="text-black/50">GRAND TOTAL</span>
                    <span className="font-semibold text-customOrange">
                      ${grandTotal}
                    </span>
                  </div>
                </div>
                <button
                  disabled={checked !== 0 ? false : true}
                  onClick={() => setFinish(true)}
                  className={`${
                    checked !== 0 ? "bg-customOrange" : "bg-customOrange/70"
                  } text-white h-10`}
                >
                  {checked !== 0 ? "CONTIUNE & PAY" : "CONTIUNE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
