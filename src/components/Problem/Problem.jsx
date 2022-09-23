import { HouseIllustration, RightBlurBlob } from "../../assets";
import style from "./index.module.css";
const Problem = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.header}>
          What <span>pain</span> though?
        </h1>
        <div className={style.details}>
          <p>
            It's <b>painful</b> to create front end applications. In order to be
            more structured, we divided our complicated programs into smaller
            parts that may be components, pages, hooks, and so on. It works
            though, because we can focus on one portion of our massive software
            at a moment, but there's an issue. In a React app with a lot of
            components (even small apps can have many components) there's a lot
            of repetitive tasks that need to be done.
          </p>
          <p>
            Need a new component? Create a folder for it, a JSX file with the
            same name, a CSS file with the same name, and maybe a new test file
            with the same name. Imagine doing this <b>ten times</b> for ten
            minor components. To make it more boring, each of these components
            has the same boilerplate code. It's <b>painful</b> to do this all by
            hand, and as developers, we're always looking for better ways to do
            tasks, which is why we created <b>lego-build</b>.
          </p>
        </div>
      </div>
      <HouseIllustration className={style.illustration} />
      <RightBlurBlob className={style.rightBlurBlob} />
    </section>
  );
};
export default Problem;
