import { Link } from "react-router-dom";

interface PropsType {
  link: string;
  title: string;
}

const HeaderNavLink = ({ link, title }: PropsType) => {
  return (
    <Link
      to={link}
      className="text-white hover:text-customOrange font-semibold text-sm"
    >
      {title}
    </Link>
  );
};

export default HeaderNavLink;
