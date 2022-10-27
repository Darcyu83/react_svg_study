import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgMovingText() {
    return (
        <svg width={400} height={200}>
            <rect x={0} y={0} width={"100%"} height={"100%"} fill="#ccc" />
            <g transform="translate(50,50)">
                <path d="M200,50 C100,50 100,150 200,150 C300,150 300,50 200,50" />
                <text id="textElement" x={0} y={0} fontFamily="Verdana" fontSize={24} textAnchor="middle" fill="white">
                    It's SVG
                    <animateMotion
                        path="M200,50 C100,50 100,150 200,150 C300,150 300,50 200,50 "
                        dur="5s"
                        fill="freeze"
                        repeatCount={"indefinite"}
                    />
                </text>
            </g>
        </svg>
    );
}

export default SvgMovingText;
