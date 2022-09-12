import { HouseIllustration, RightBlurBlob } from "../../assets";
import style from "./index.module.css";
const Problem = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h1 className={style.header}>What <span>pain</span> though?</h1>
                <div className={style.details}>
                    <p>Building front end applications is <b>painful</b>. In a quest to be more organized, we split our complex apps into smaller blocks, which could be components, pages, hooks etc. It works though, this way we can focus on working on one section of our gigantic app at a time, but there’s a problem. In a React app with a lot of components (even small apps can have many components) there’s  a lot of repetitive tasks that need to be done.</p>
                    <p>Need a new component? Create a folder for it, create a JSX file with the same name, create a CSS file with the same name, and in some cases create a new test file with the same name. Imagine doing this 10 times for 10 small components. Each of these components also have the same boilerplate code to start with. It’s <b>painful</b> to do this all manually, and as developers we always look for easier ways to perform a task, that’s why we made <b>lego-build.</b></p>
                </div>
            </div>
            <HouseIllustration className={style.illustration} />
            <RightBlurBlob className={style.rightBlurBlob} />
        </section>
    );
};
export default Problem;