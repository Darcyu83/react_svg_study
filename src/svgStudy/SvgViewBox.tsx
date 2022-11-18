import React from "react";

interface IProps {}

function SvgViewBox({}: IProps) {
    return (
        <svg width={300} height={300} viewBox="-50 -50 300 300">
            <circle r={100} cx={50} cy={50} fill="teal" />
            <text x={50} y={50} stroke="white" textAnchor="middle">
                원 좌측 외각 좌표 -50,-50 ViewBox="-50 -50 300 300"
            </text>
            {/* <rect width="100%" height={"100%"} x={0} y={0} /> */}
        </svg>
    );
}

export default SvgViewBox;
