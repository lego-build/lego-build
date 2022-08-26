const ShadowCircle = () => {
    return (
        <svg width="345" height="345" viewBox="0 0 345 345" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_288_1081)">
            <rect x="85" y="85" width="175" height="175" rx="87.5" fill="url(#paint0_linear_288_1081)" fill-opacity="0.09" />
        </g>
        <defs>
            <filter id="filter0_f_288_1081" x="0" y="0" width="345" height="345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="42.5" result="effect1_foregroundBlur_288_1081" />
            </filter>
            <linearGradient id="paint0_linear_288_1081" x1="105.981" y1="121.029" x2="274.307" y2="152.372" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7450F6" />
                <stop offset="1" stop-color="#CF50F6" />
            </linearGradient>
        </defs>
        </svg>
    );
}
 
export default ShadowCircle;