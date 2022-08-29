const BlurWatermark = () => {
    return ( 
        <svg width="297" height="297" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_288_1082)">
                <circle cx="148.5" cy="148.5" r="93.5" fill="url(#paint0_linear_288_1082)" fillOpacity="0.07" />
            </g>
            <defs>
                <filter id="filter0_f_288_1082" x="0.533974" y="0.533974" width="295.932" height="295.932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="27.233" result="effect1_foregroundBlur_288_1082" />
                </filter>
                <linearGradient id="paint0_linear_288_1082" x1="133.068" y1="34.1214" x2="181.18" y2="210.531" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9D50F6" />
                    <stop offset="1" stopColor="#00F5C8" />
                </linearGradient>
            </defs>
        </svg>
     );
}
 
export default BlurWatermark;