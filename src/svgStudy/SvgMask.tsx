import React from "react";

interface IProps {}

function SvgMask({}: IProps) {
    return (
        <svg width={"100%"} height={"100%"} viewBox="0 0 200 200">
            <mask id="myMask">
                <rect width={"100%"} height={"100%"} x={0} y={0} fill={"white"} />
                <circle r={80} cx={150} cy={150} fill="black" />
            </mask>

            <rect width={"100%"} height={"100%"} x={0} y={0} fill={"tomato"} />
            <path
                d="M -100 100 C 40 10 60 10 100 100 S 150 170 200 100 L200 200 0 200 Z"
                stroke="yellow"
                strokeWidth={3}
                fill="blue"
            />
            <rect width={"100%"} height={"100%"} x={0} y={0} fill={"black"} mask="url(#myMask)" />
        </svg>
    );
}

export default SvgMask;
