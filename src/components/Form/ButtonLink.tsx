import React, { ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & LinkProps;

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, ...props }) => {
  return (
    <Link to={props.to}>
      <button {...props}>{children}</button>
    </Link>
  );
};

export default ButtonLink;
