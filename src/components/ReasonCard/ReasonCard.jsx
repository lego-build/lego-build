import style from "./index.module.css";
const ReasonCard = ({ children, heading, detail }) => {
  return (
    <div className={style.container}>
      <div className={style.icon}>{children}</div>
      <h3 className={style.heading}>{heading}</h3>
      <p
        className={style.detail}
        dangerouslySetInnerHTML={{ __html: detail }}
      ></p>
    </div>
  );
};

export default ReasonCard;
