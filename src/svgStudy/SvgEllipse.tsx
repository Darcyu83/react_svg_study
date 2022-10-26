import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgEllipse() {
    const circleR = 42; //반지름

    return (
        <svg width={SVG_OUTTER_SIZE * 3} height={SVG_OUTTER_SIZE * 2}>
            {/* 타원 순차적 겹치기 */}
            <ellipse cx={150} cy={95} rx={140} ry={20} stroke="white" strokeWidth={1} fill="purple" />
            <ellipse cx={140} cy={75} rx={120} ry={15} stroke="purple" strokeWidth={1} fill="cyan" />
            <ellipse cx={130} cy={55} rx={100} ry={10} stroke="purple" strokeWidth={1} fill="white" />

            {/* 타원 안에 타원 */}
            <ellipse cx={150} cy={150} rx={150} ry={30} stroke="purple" strokeWidth={1} fill="dodgerblue" />
            <ellipse cx={130} cy={150} rx={120} ry={20} stroke="purple" strokeWidth={1} fill="white" />
            <ellipse cx={120} cy={150} rx={100} ry={15} stroke="purple" strokeWidth={1} fill="purple" />
        </svg>
    );
}

export default SvgEllipse;
