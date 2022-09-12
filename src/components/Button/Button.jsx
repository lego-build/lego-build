import style from "./index.module.css";
import { Link } from "react-router-dom";

const Button = ({ children, to, outline, ...props }) => {
  const Wrapper = ({ children, ...props }) =>
    to ? <Link {...props}>{children}</Link> : <a {...props}>{children}</a>;

  const inlineStyle = outline
    ? {
        backgroundColor: "transparent",
        border: "1px solid #008f75",
        color: "#008f75",
      }
    : {};

  return (
    <Wrapper {...props} className={style.button} style={inlineStyle} to={to}>
      {children}
    </Wrapper>
  );
};

export default Button;
