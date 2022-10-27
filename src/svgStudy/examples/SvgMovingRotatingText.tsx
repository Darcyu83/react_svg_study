import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgMovingRotatingText() {
    return (
        <>
            <svg width={400} height={200}>
                <rect x={0} y={0} width={"100%"} height={"100%"} fill="#ccc" />

                {/* <rect id="rec" x={300} y={150} width={10} height={10}>
                    <animate attributeName="fill" attributeType="CSS" from={"lime"} to="red" begin={"0s"} dur={"5s"} />
                    <animate
                        attributeName="x"
                        attributeType="XML"
                        from={300}
                        to={10}
                        begin="0s"
                        dur="5s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        from={150}
                        to={10}
                        begin="0s"
                        dur="5s"
                        fill="freeze"
                    />
                </rect> */}
                <rect id="rec" x={300} y={150} width={10} height={10}>
                    <animate
                        attributeName="fill"
                        attributeType="CSS"
                        from={"yellow"}
                        to="green"
                        begin={"0s"}
                        dur={"5s"}
                        fill="freeze"
                    />
                    <animateMotion path="M0,0 l-100,-100" begin="0s" dur="5s" fill="freeze" />
                </rect>

                <text x={20} y={20} fontSize={18} fontFamily="Verdana" visibility={"hidden"}>
                    It's SVG Moving Rotating
                    <animate
                        attributeName="visibility"
                        attributeType="CSS"
                        to="visible"
                        begin="1s"
                        dur="5s"
                        fill="freeze"
                    />
                    <animateMotion path="M10,10 L400,200" begin={"1s"} dur="5s" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from={-30}
                        to={0}
                        begin="1s"
                        dur="5s"
                        fill="freeze"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="scale"
                        additive="sum"
                        from={1}
                        to={3}
                        begin="1s"
                        dur="5s"
                    />
                </text>
            </svg>
            <svg width={400} height={200}>
                <rect x={0} y={0} width={"100%"} height={"100%"} fill="#ccc" />
                <text x={20} y={20} fontSize={18} fontFamily="Verdana" visibility={"hidden"}>
                    It's SVG Moving Rotating
                    <animate
                        attributeName="visibility"
                        attributeType="CSS"
                        to="visible"
                        begin="1s"
                        dur="5s"
                        fill="freeze"
                    />
                    <animateMotion path="M10,10 L 400,200" begin={"1s"} dur="5s" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from={-30}
                        to={0}
                        begin="1s"
                        dur="5s"
                        fill="freeze"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="scale"
                        additive="sum"
                        from={1}
                        to={3}
                        begin="1s"
                        dur="5s"
                    />
                </text>
            </svg>
        </>
    );
}

export default SvgMovingRotatingText;
