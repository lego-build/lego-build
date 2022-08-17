import React from "react";
import NavLink from "../NavLink/NavLink";
import style from "./index.module.css";

function Nav() {
  const navItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Documentation",
      to: "/docs",
    },
    {
      text: "Community",
      to: "/community",
    },
    {
      text: "Contact",
      to: "/contact",
    },
    {
      text: "Sponsor",
      to: "/sponsor",
    },
  ];

  return (
    <nav className={style.nav}>
      <svg
        width="229"
        height="47"
        viewBox="0 0 229 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8562 7.73331H19.025V10.3278C22.3446 11.0713 25.1958 13.0548 27.067 15.7665L30.0679 14.9532L31.6815 20.9073L29.2986 21.5531C29.3751 22.1305 29.4146 22.7195 29.4146 23.3178C29.4146 25.4879 28.8953 27.5368 27.9742 29.3469L30.7356 32.0926L26.386 36.4671L23.9656 34.0604C22.5144 35.1243 20.8397 35.9013 19.025 36.3078V38.9023H12.8562V36.2308C11.2249 35.822 9.71303 35.1121 8.38299 34.1637L5.03338 36.0976L1.94895 30.7552L4.26731 29.4167C3.32386 27.5896 2.79109 25.5159 2.79109 23.3178C2.79109 22.6637 2.83827 22.0206 2.92941 21.3917L0 19.7004L3.08443 14.358L5.24966 15.6081C7.05915 13.0654 9.73981 11.1858 12.8562 10.4048V7.73331Z"
          fill="url(#paint0_linear_143_1076)"
        />
        <rect
          x="7.14355"
          y="22.2536"
          width="17.0898"
          height="4.47324"
          fill="white"
        />
        <rect
          x="9.19885"
          y="20.071"
          width="3.9933"
          height="3.42339"
          fill="white"
        />
        <rect
          x="18.0431"
          y="20.0709"
          width="3.9933"
          height="3.42339"
          fill="white"
        />
        <path
          d="M54.2309 29.3271C53.0583 29.1672 52.1256 28.2345 51.9657 27.062V14.0306H48.6346V26.7422C48.6346 27.6749 48.8478 28.5543 49.2475 29.3538C49.8071 30.5263 50.7665 31.4857 51.939 32.072C52.7385 32.4717 53.6179 32.6849 54.5506 32.6849H64.011V29.3538L54.2309 29.3271ZM71.7061 17.3351H85.3237V14.004H71.7061C68.9346 14.004 66.6961 16.2691 66.6961 19.0406V27.6216C66.6961 30.3931 68.9346 32.6583 71.7061 32.6583H85.3237V29.3271H71.7061C70.7734 29.3271 70.0006 28.5543 70.0006 27.6216V24.1039H81.9926V20.7728H70.0006V19.0406C70.0006 18.1079 70.7734 17.3351 71.7061 17.3351ZM95.8532 17.3351H105.18V14.004H95.8532C90.71 14.004 86.5261 18.1879 86.5261 23.3311C86.5261 28.4744 90.71 32.6583 95.8532 32.6583H105.18V22.4251H95.8532V25.7562H101.849V29.3271H95.8532C92.5487 29.3271 89.8572 26.6356 89.8572 23.3311C89.8572 20.0267 92.5487 17.3351 95.8532 17.3351ZM116.501 14.004C111.358 14.004 107.174 18.1879 107.174 23.3311C107.174 28.4744 111.358 32.6583 116.501 32.6583C121.644 32.6583 125.828 28.4744 125.828 23.3311C125.828 18.1879 121.644 14.004 116.501 14.004ZM116.501 29.3271C113.196 29.3271 110.505 26.6356 110.505 23.3311C110.505 20.0267 113.196 17.3351 116.501 17.3351C119.805 17.3351 122.497 20.0267 122.497 23.3311C122.497 26.6356 119.805 29.3271 116.501 29.3271ZM140.458 25.5163V22.1852H127.827V25.5163H140.458ZM159.118 21.7588C159.625 20.986 159.918 20.0533 159.918 19.0406C159.918 16.2691 157.653 14.004 154.881 14.004H143.129V32.6583H155.841C159.118 32.6583 161.783 29.9934 161.783 26.7155C161.783 24.6369 160.717 22.8248 159.118 21.7588ZM146.46 17.3351H154.908C155.841 17.3351 156.613 18.1079 156.613 19.0406C156.613 19.9734 155.841 20.7462 154.908 20.7462H146.46V17.3351ZM155.841 29.3271H146.46V24.0773H155.841C157.28 24.0773 158.452 25.2499 158.452 26.6889C158.452 28.1279 157.28 29.3005 155.841 29.3005V29.3271ZM179.116 14.004V23.3311C179.116 26.6356 176.424 29.3271 173.12 29.3271C169.815 29.3271 167.124 26.6356 167.124 23.3311V14.004H163.792V23.3311C163.792 28.4744 167.976 32.6583 173.12 32.6583C178.263 32.6583 182.447 28.4744 182.447 23.3311V14.004H179.116ZM188.438 32.6583V14.004H185.106V32.6583H188.438ZM196.688 29.3271C195.516 29.1672 194.583 28.2345 194.423 27.062V14.0306H191.092V26.7422C191.092 27.6749 191.305 28.5543 191.705 29.3538C192.265 30.5263 193.224 31.4857 194.397 32.072C195.196 32.4717 196.075 32.6849 197.008 32.6849H206.468V29.3538L196.688 29.3271ZM209.127 14.004V32.6583H218.454C221.012 32.6583 223.331 31.619 225.01 29.9134C225.196 29.7269 225.383 29.5403 225.543 29.3538C226.928 27.7282 227.755 25.6229 227.755 23.3311C227.755 18.1879 223.571 14.0306 218.427 14.0306L209.127 14.004ZM212.431 17.3618H218.427C221.732 17.3618 224.423 20.0533 224.423 23.3578C224.423 26.6622 221.732 29.3538 218.427 29.3538H212.431V17.3618Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_143_1076"
            x1="10.7457"
            y1="17.7983"
            x2="24.3822"
            y2="33.7076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9D50F6" />
            <stop offset="1" stopColor="#00D1AB" />
          </linearGradient>
        </defs>
      </svg>
      <ul>
        {navItems.map(({ text, to }) => (
          <li key={text}>
            <NavLink to={to}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;