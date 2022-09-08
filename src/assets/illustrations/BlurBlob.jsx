const BlurBlob = (props) => {
  return (
    <svg
      {...props}
      width="324"
      height="464"
      viewBox="0 0 324 464"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_36_1119)">
        <circle
          cx="92"
          cy="232"
          r="146"
          fill="url(#paint0_linear_36_1119)"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_36_1119"
          x="-139.049"
          y="0.951454"
          width="462.097"
          height="462.097"
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
            stdDeviation="42.5243"
            result="effect1_foregroundBlur_36_1119"
          />
        </filter>
        <linearGradient
          id="paint0_linear_36_1119"
          x1="67.9029"
          y1="53.3981"
          x2="143.029"
          y2="328.861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9D50F6" />
          <stop offset="1" stopColor="#00F5C8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BlurBlob;
