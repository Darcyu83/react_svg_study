import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgEngraveEmboss() {
    return (
        <>
            <svg width={400} height={200}>
                <defs>
                    <filter id="3dTube" filterUnits="userSpaceOnUse">
                        <feGaussianBlur result="blur" in="SourceAlpha" stdDeviation={4} />
                        <feOffset result="offsetBlur" in="blur" dx="4" dy="4" />
                        <feSpecularLighting
                            result="specOut"
                            in="blur"
                            surfaceScale={5}
                            specularConstant={0.75}
                            specularExponent={20}
                            lightingColor="#bbbbbb"
                        >
                            <fePointLight x="-5000" y="-10000" z="20000" />
                        </feSpecularLighting>

                        <feComposite
                            in="SourceGraphic"
                            in2="specOut"
                            operator={"arithmetic"}
                            k1="0"
                            k2="1"
                            k3="1"
                            k4="0"
                            result="litPaint"
                        />
                        <feMerge>
                            <feMergeNode in="offsetBlur" />
                            <feMergeNode in="litPaint" />
                        </feMerge>
                    </filter>
                </defs>
                <rect x={0} y={0} width={400} height={200} fill="#ccc" />

                <g filter="url(#3dTube)">
                    <path
                        d="M100,10 C10,10 10,190 100,190 L300,190 C390,190 390,10 300,10 z"
                        stroke="#D90000"
                        strokeWidth={10}
                        fill="none"
                    />
                    <text
                        x={"50%"}
                        y={"50%"}
                        fontSize={90}
                        fontFamily="Verdana"
                        stroke="black"
                        strokeWidth={1}
                        dominant-baseline="middle"
                        textAnchor="middle"
                        fill="white"
                    >
                        SVG
                    </text>
                </g>
            </svg>
            <svg width={400} height={200}>
                <defs>
                    <filter id="SpecularLine">
                        <feGaussianBlur result="blur" in="SourceAlpha" stdDeviation={4} />
                        <feOffset result="offsetBlur" in="blur" dx="4" dy="4" />
                        <feSpecularLighting
                            result="specOut"
                            in="blur"
                            surfaceScale={5}
                            specularConstant={0.75}
                            specularExponent={20}
                            lightingColor="#bbbbbb"
                        >
                            <fePointLight x="-5000" y="-10000" z="20000" />
                        </feSpecularLighting>

                        <feComposite
                            in="SourceGraphic"
                            in2="specOut"
                            operator={"arithmetic"}
                            k1="0"
                            k2="1"
                            k3="1"
                            k4="0"
                        />
                    </filter>
                </defs>
                <rect x={0} y={0} width={400} height={200} fill="#ccc" />

                <g filter="url(#SpecularLine)">
                    <path
                        d="M100,10 C10,10 10,190 100,190 L300,190 C390,190 390,10 300,10 z"
                        stroke="#D90000"
                        strokeWidth={10}
                        fill="none"
                    />
                    <text
                        x={"50%"}
                        y={"50%"}
                        fontSize={90}
                        fontFamily="Verdana"
                        stroke="black"
                        strokeWidth={3}
                        dominant-baseline="middle"
                        textAnchor="middle"
                        fill="white"
                    >
                        SVG
                    </text>
                </g>
            </svg>

            <svg width={400} height={200}>
                <defs>
                    <filter id="myEmbossed" filterUnits={"userSpaceOnUse"}>
                        <feGaussianBlur result="blur" in="SourceAlpha" stdDeviation={4} />
                        <feOffset result="blurOffset" in="blur" dx="4" dy="4" />
                        <feSpecularLighting
                            result="specOut"
                            in="blur"
                            lightingColor="#bbbbbb"
                            surfaceScale={5}
                            specularConstant="0.75"
                            specularExponent={20}
                        >
                            <fePointLight x="10000" y="-10000" z="20000" />
                        </feSpecularLighting>
                        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                    </filter>
                </defs>

                <rect x={0} y={0} width={400} height={200} fill="#ccc" />
                <g filter="url(#myEmbossed)">
                    <path
                        d="M100,10 C10,10 10,190 100,190 L300,190 C390,190 390,10 300,10 z"
                        stroke="black"
                        strokeWidth={3}
                        fill="none"
                    />
                    <text
                        x={"50%"}
                        y={"50%"}
                        fontSize={90}
                        fontFamily="Verdana"
                        stroke="white"
                        dominant-baseline="middle"
                        textAnchor="middle"
                    >
                        SVG
                    </text>
                </g>
            </svg>
            <svg width="400" height="200">
                <defs>
                    <filter id="myFilter" filterUnits="userSpaceOnUse">
                        <feGaussianBlur result="blur" in="SourceAlpha" stdDeviation={3} />
                        <feOffset result="offsetBlur" in="blur" dx="4" dy="4" />
                        <feSpecularLighting
                            result="speculBlur"
                            in="blur"
                            surfaceScale={5}
                            specularConstant={0.75}
                            specularExponent={20}
                        >
                            <fePointLight x="-5000" y="-10000" z="20000" />
                        </feSpecularLighting>
                    </filter>
                </defs>

                <rect x={1} y={1} width={198} height={118} fill={"#ccc"} />

                <g filter="url(#myFilter)">
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
            </svg>
        </>
    );
}

export default SvgEngraveEmboss;
