import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgPath() {
    const circleR = 42; //반지름

    return (
        <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
            {/* 삼각형  */}
            <path d="M50 20 L20 10 L70 100 Z" />
        </svg>
        // <svg height="210" width="400">
        //     <path d="M150 0 L75 200 L225 200 Z" />
        // </svg>
    );
}

export default SvgPath;
