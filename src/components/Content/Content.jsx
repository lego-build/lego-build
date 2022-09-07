import style from "./index.module.css";
const Content = () => {
    return (
        <section>
            <div>
                <h1>Power to the developer</h1>  
                <div>
                    <p>React, by design, is unopinionated. The implication of this is that while every developer tries to maintain some structure in their project, this structure can vary for each developer. Some developers store their all their components in a ‘src/components’ folder, others follow atomic design, so they have folders for atoms, molecules etc. While most React developers have the concept of ‘components’ in their app, there are other building blocks that could be in a React app, there are layouts, pages, reducers, actions etc.</p>
                    <p>So you see, a tool that aims to help developers easily build blocks must be very flexible, and not hard-coded. That’s what <b>lego-build</b> does. All the configuration power lies in the hand of the developer. It’s a <b>flexible</b> tool, that bends to the will of its master.</p>
                </div>
           </div>
        </section>
    );
}
 
export default Content;