import {
  ComputerTroubleshootingIllustration,
  Dots,
  FlexBiceps,
  LeftDots,
} from "../../assets";
import style from "./index.module.css";
const Content = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.header}>
          <span>Power</span> to the developer
        </h1>
        <div className={style.details}>
          <p>
            React is designed to be unopinionated. The implication is that, while every developer strives to maintain some organization in their project, this structure varies from developer to developer. Some developers keep all of their components in a'src/components' folder, whereas others use atomic design and have folders for atoms, molecules, and so on. While most React developers use the idea of 'components' in their project, there are additional building elements that may be found in a React app, such as layouts, pages, reducers, actions, and so on.
          </p>
          <p>
            As you can see, a tool that attempts to assist developers in easily building blocks must be extremely flexible and not hard-coded. That is exactly what <b>lego-build</b> does. The developer has complete control over the settings. It's a <b>flexible</b> instrument that conforms to its master's will.
          </p>
        </div>
        <FlexBiceps className={style.biceps} />
      </div>
      <ComputerTroubleshootingIllustration className={style.illustration} />
      <LeftDots className={style.leftDots} />
      <Dots className={style.rightDots} />
    </section>
  );
};

export default Content;
