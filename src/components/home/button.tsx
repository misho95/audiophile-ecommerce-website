const Button = ({ type }) => {
  return (
    <button
      className={`${
        type === "orange"
          ? "bg-customOrange text-white"
          : type === "gray"
          ? "bg-customDarkGray text-white"
          : "bg-transparent text-black"
      }  w-40 h-12 text-white ${
        type === "outline" ? "border-px1 border-black" : ""
      }`}
    >
      SEE PRODUCT
    </button>
  );
};

export default Button;
