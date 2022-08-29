import style from "./index.module.css";

const Button = ({ children, ...props }) => {
  return (
    <a {...props} className={style.button}>
      {children}
    </a>
  );
};

export default Button;
