interface PropsType {
  type: string;
}

const Button = ({ type }: PropsType) => {
  return (
    <button
      className={`${
        type === "orange"
          ? "bg-customOrange text-white"
          : type === "gray"
          ? "bg-customDarkGray text-white"
          : "bg-transparent text-black"
      }  w-40 h-12 ${type === "outline" ? "border-px1 border-black" : ""}`}
    >
      SEE PRODUCT
    </button>
  );
};

export default Button;
