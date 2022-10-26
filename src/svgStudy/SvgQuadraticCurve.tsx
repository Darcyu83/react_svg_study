import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgQuadraticCurve() {
    const aX = 100;
    const aY = 350;

    const bX = 250;
    const bY = 50;

    const cX = 400;
    const cY = 350;

    return (
        <>
            <svg width={410} height={450}>
                {/* 3개의 포인트  직선 2 포인트 + 컨트롤 포인트 : quadratic Bézier curve  */}

                <g stroke="black" fill="black">
                    <circle id="pointA" cx={aX} cy={aY} r="3" />
                    <circle id="pointB" cx={bX} cy={bY} r="3" />
                    <circle id="pointC" cx={cX} cy={cY} r="3" />
                </g>

                <g fontSize={30} fontFamily={"sans-serif"} fill="black" stroke="none">
                    <text x={aX} y={aY} dx={10}>
                        A
                    </text>
                    <text x={bX} y={bY} dx={10}>
                        B
                    </text>
                    <text x={cX} y={cY} dx={-30}>
                        C
                    </text>
                    <text x={150} y={200} fill="blue" transform="rotate(20 250,200)">
                        Relative based
                    </text>
                </g>

                <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" strokeWidth={2} fill={"none"} />
                <path id="lineBC" d="M 250 50 l 150 300" stroke="yellow" strokeWidth={2} />
                <path d="M 175 200 l 150 0" stroke="green" strokeWidth={2} />
                <path d="M 100 350 q 150 -300 300 0" stroke="blue" strokeWidth={2} fill={"none"} />
            </svg>
            <svg width={410} height={450}>
                {/* 3개의 포인트  직선 2 포인트 + 컨트롤 포인트 : quadratic Bézier curve  */}
                <line x1={aX} y1={aY} x2={cX} y2={cY} stroke="purple" strokeWidth={3} />

                <g stroke="black" fill="black">
                    <circle id="pointA" cx={aX} cy={aY} r="3" />
                    <circle id="pointB" cx={bX} cy={bY} r="3" />
                    <circle id="pointC" cx={cX} cy={cY} r="3" />
                </g>

                <g fontSize={30} fontFamily={"sans-serif"} fill="black" stroke="none">
                    <text x={aX} y={aY} dx={10}>
                        A
                    </text>
                    <text x={bX} y={bY} dx={10}>
                        B
                    </text>
                    <text x={cX} y={cY} dx={-30}>
                        C
                    </text>
                    <text x={150} y={200} fill="blue">
                        Absolute based
                        <tspan x={150} y={230}>
                            (suitable with me)
                        </tspan>
                    </text>
                </g>
                <a href="https://www.w3schools.com/graphics/" target={"_blank"}>
                    <text x={0} y={15} fill="red">
                        Click to open w3 website
                    </text>
                </a>

                {/* 절대값 : 나는 이게 잘맞네 */}
                <path d={`M ${aX} ${aY} L ${bX} ${bY}`} stroke="red" />
                <path d={`M ${bX} ${bY} L ${cX} ${cY}`} stroke="red" />
                <path d={`M ${aX} ${aY} Q ${bX} ${bY} ${cX} ${cY}`} stroke="green" fill="none" />
            </svg>
        </>
    );
}

export default SvgQuadraticCurve;
