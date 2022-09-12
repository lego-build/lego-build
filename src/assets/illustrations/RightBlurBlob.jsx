const RightBlurBlob = (props) => {
  return (
    <svg
      {...props}
      width="248"
      height="282"
      viewBox="0 0 248 282"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_928_1758)">
        <circle
          cx="181"
          cy="181"
          r="114"
          fill="url(#paint0_linear_928_1758)"
          fillOpacity="0.25"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_928_1758"
          x="0.592232"
          y="0.592232"
          width="360.816"
          height="360.816"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="33.2039"
            result="effect1_foregroundBlur_928_1758"
          />
        </filter>
        <linearGradient
          id="paint0_linear_928_1758"
          x1="162.184"
          y1="41.5437"
          x2="220.845"
          y2="256.631"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9D50F6" />
          <stop offset="1" stopColor="#00F5C8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightBlurBlob;
