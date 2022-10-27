import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgBlurStrokeText() {
    return (
        <>
            <svg width="200" height="150">
                <defs>
                    <filter id="MyFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="200" height="120">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                    </filter>
                </defs>
                <rect x="1" y="1" width="198" height="118" fill="#cccccc" />
                <g filter="url(#MyFilter)">
                    <path
                        fill="none"
                        stroke="#D90000"
                        stroke-width="10"
                        d="M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z"
                    />
                    <text fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana" x="52" y="76">
                        SVG
                    </text>
                </g>
                Sorry, your browser does not support inline SVG.
            </svg>

            <svg width="400" height="110">
                <defs>
                    <filter id="myBlur" filterUnits={"userSpaceOnUse"}>
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={3} />
                    </filter>
                </defs>

                <rect x={1} y={1} width={"100%"} height="100%" fill="dodgerblue" />

                <g filter="url(#myBlur)">
                    <path
                        d="M70,10 C10,10 10,100 70,100 L330,100 C390,100 390,10 330,10 z"
                        stroke="black"
                        strokeWidth={3}
                        fill="none"
                    />
                    <text
                        fill="white"
                        stroke="black"
                        font-size="80"
                        fontFamily="Verdana"
                        x={200}
                        y={80}
                        textAnchor="middle"
                    >
                        SVG
                    </text>
                </g>
            </svg>
        </>
    );
}

export default SvgBlurStrokeText;
