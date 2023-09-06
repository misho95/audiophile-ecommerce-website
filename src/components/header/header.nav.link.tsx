import { Link } from "react-router-dom";

const HeaderNavLink = ({ link, title }) => {
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
