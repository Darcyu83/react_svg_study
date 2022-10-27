import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgFeBlendFilter() {
    return (
        <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2}>
            <defs>
                <linearGradient id={"lineGr1"} x1={"0%"} x2={"100%"} y1={"0%"} y2={"0%"}>
                    <stop offset={0} style={{ stopColor: "black" }} />
                    <stop offset={0.3} style={{ stopColor: "gray" }} />
                    <stop offset={0.6} style={{ stopColor: "magenta" }} />
                    <stop offset={1} style={{ stopColor: "yellow" }} />
                </linearGradient>

                <filter id="normal">
                    <feBlend mode="normal" in="SourceGraphic" />
                </filter>
                <filter id="multiply">
                    <feBlend mode="multiply" in="SourceGraphic" />
                </filter>
                <filter id="screen">
                    <feBlend mode="screen" in="SourceGraphic" />
                </filter>
                <filter id="darken">
                    <feBlend mode="darken" in="SourceGraphic" />
                </filter>
                <filter id="lighten">
                    <feBlend mode="lighten" in="SourceGraphic" />
                </filter>
            </defs>
            <g enableBackground={"new"}>
                <rect x={0} y={0} width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2} fill="url(#lineGr1)" />
            </g>

            <g style={{ fontSize: "16px", opacity: 0.8 }} fill={"white"}>
                <text x={"0%"} y="10%">
                    None: Lorem, ipsum dolor.
                </text>
                <text x={"0%"} y="20%" filter="url(#normal)">
                    filter="url(#normal)" Lorem, ipsum dolor.
                </text>
                <text x={"0%"} y="35%" filter="url(#multiply)">
                    filter="url(#multiply)" Lorem, ipsum dolor.
                </text>
                <text x={"0%"} y="50%" filter="url(#screen)">
                    filter="url(#screen)" Lorem, ipsum dolor.
                </text>
                <text x={"0%"} y="70%" filter="url(#darken)">
                    filter="url(#darken)" Lorem, ipsum dolor.
                </text>
                <text x={"0%"} y="90%" filter="url(#lighten)">
                    filter="url(#lighten)" Lorem, ipsum dolor.
                </text>
            </g>
        </svg>
    );
}

export default SvgFeBlendFilter;
