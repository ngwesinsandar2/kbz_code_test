import { Link } from "react-router-dom";

export const LinkButton = ({ routeLink, btnContent }) => {
  return (
    <>
      <Link to={routeLink}>{btnContent}</Link>
    </>
  );
}

export const Button = ({ btnType, handleClick, btnContent, classNames }) => {
  return (
    <button type={btnType} className={`${classNames} bg-[var(--primary-color)] w-full py-4 rounded-full text-white font-medium`}>{btnContent}</button>
  );
}