import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgStrokeStyle() {
    return (
        <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE}>
            <path d="M 10 10 l 150 0" stroke="red" strokeWidth={2} strokeLinecap="butt" strokeDasharray={"5,5"} />
            <path d="M 15 20 l 150 0" stroke="blue" strokeWidth={4} strokeLinecap="round" strokeDasharray={"10,20"} />
            <path
                d="M 20 30 l 150 0"
                stroke="cyan"
                strokeWidth={3}
                strokeLinecap="round"
                strokeDasharray={"30,20,5,10,5,10"}
            />
            <path
                d="M 20 40 l 150 0"
                stroke="cyan"
                strokeWidth={3}
                strokeLinecap="butt"
                strokeDasharray={"20,10,5,5,5,10"}
            />
        </svg>
    );
}

export default SvgStrokeStyle;
