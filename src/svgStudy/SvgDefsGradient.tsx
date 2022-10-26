import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgDefsGradient() {
    return (
        <>
            <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
                {/* Linear Gradient */}
                <defs>
                    <linearGradient id="horiGradi" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset={"0%"} style={{ stopColor: "rgb(255, 255, 0)" }} />
                        <stop offset={"100%"} style={{ stopColor: "rgb(255, 0, 0)" }} />
                    </linearGradient>
                    <linearGradient id="vertiGradi" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgb(255,255,0)" }} />
                        <stop offset="100%" style={{ stopColor: "rgb(255,0,0)" }} />
                    </linearGradient>
                    <radialGradient id="radiGradi" cx="50%" cy="50%" fx={"40%"} fy="40%">
                        <stop offset="0%" style={{ stopColor: "rgb(255,255,255)" }} />
                        <stop offset={"100%"} style={{ stopColor: "rgb(0,0,0)" }} />
                    </radialGradient>
                    <radialGradient id="radiGradi2" cx="20%" cy="30%" r="30%" fx="50%" fy="50%">
                        <stop offset="0%" style={{ stopColor: "rgb(255,255,255)" }} />
                        <stop offset={"100%"} style={{ stopColor: "rgb(0,0,255)" }} />
                    </radialGradient>
                </defs>

                <ellipse cx={50} cy={50} rx="35" ry="20" fill="url(#horiGradi)" />
            </svg>
            <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
                <ellipse cx={50} cy={50} rx="35" ry="20" fill="url(#vertiGradi)" />
                <text x={27} y={55} fill="#ffffff" fontSize={20} fontFamily="Verdana">
                    SVG
                </text>
                <line x1={0} x2={100} y1={50} y2={50} stroke="blue" />
            </svg>
            <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
                <ellipse cx={50} cy={50} rx="35" ry="20" fill="url(#radiGradi)" />
            </svg>
            <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
                <ellipse cx={50} cy={50} rx="35" ry="20" fill="url(#radiGradi2)" />
            </svg>
        </>
    );
}

export default SvgDefsGradient;
