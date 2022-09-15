import { Link } from "react-router-dom";
import {
  CommunityLinkIcon,
  CommunityPageIllustration,
  EarthGlobe,
} from "../../assets";
import style from "./index.module.css";
const Community = () => {
  return (
    <section className={style.container}>
      <EarthGlobe className={style.waterMark} />
      <div className={style.content}>
        <h1 className={style.header}>
          Get help from a <span>vast</span> community
        </h1>
        <p className={style.details}>
          Finding a scalable front end structure is difficult, but thankfully for us, there is a large community of people ready to share their scalable process with us. Examine how other developers are utilizing lego-build. Examine their workflows, templates, and configurations. You are also free to share yours with the community.
        </p>
        <Link to={"/community"}>
          <span className={style.linkContainer}>
            <span className={style.communityLink}>VIEW COMMUNITY</span>{" "}
            <CommunityLinkIcon className={style.linkIcon} />
          </span>
        </Link>
      </div>
      <div>
        <CommunityPageIllustration className={style.illustration} />
      </div>
    </section>
  );
};

export default Community;
