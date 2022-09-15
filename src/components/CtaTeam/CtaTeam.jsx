import style from "./index.module.css";
const CtaTeam = ({ name, details, link }) => {
  return (
    <div className={style.container}>
      <a target={"_blank"} href={link} rel="noreferrer">
        {name}
      </a>
      <p> {details}</p>
    </div>
  );
};

export default CtaTeam;
