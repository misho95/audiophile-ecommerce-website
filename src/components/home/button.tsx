import { Link } from "react-router-dom";

interface PropsType {
  type: string;
  link: string;
}

const Button = ({ type, link }: PropsType) => {
  return (
    <Link
      to={link}
      className={`${
        type === "orange"
          ? "bg-customOrange text-white"
          : type === "gray"
          ? "bg-customDarkGray text-white"
          : "bg-transparent text-black"
      }  w-40 h-12 ${
        type === "outline" ? "border-px1 border-black" : ""
      } flex justify-center items-center`}
    >
      SEE PRODUCT
    </Link>
  );
};

export default Button;
