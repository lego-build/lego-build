import { Link } from "react-router-dom";
import { CommunityLinkIcon, CommunityPageIllustration } from "../../assets";
import style from "./index.module.css";
const Community = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h1 className={style.header}>Get help from a <span>vast</span> community</h1>
                <p className={style.details}>Finding a front end structure that scales well is hard but fortunately for us, there’s a whole community of people willing to share their scalable workflow with us. See how other developers are using lego-build. Check out their workflows, templates and setups. You’re welcome to share yours with the community too!</p>
                <Link to={"/community"}><span className={style.linkContainer}><span className={style.communityLink}>View Community</span> <CommunityLinkIcon className={style.linkIcon} /></span></Link>
            </div>
            <div>
                <CommunityPageIllustration className={style.illustration} />
            </div>
        </section>
    );
}
 
export default Community;