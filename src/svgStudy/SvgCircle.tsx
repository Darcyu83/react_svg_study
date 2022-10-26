import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgCircle() {
    const circleR = 42; //반지름

    return (
        <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
            {/* 원 */}
            <circle cx={circleR} cy={circleR} r={circleR} stroke="white" strokeWidth={1} fill="blue" />
        </svg>
    );
}

export default SvgCircle;
