import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgSizeGrowing() {
    return (
        <>
            <svg width={400} height={200}>
                <rect id="rec1" x={400} y={200} width="10" height="10" fill="lime">
                    <animate
                        repeatCount="indefinite"
                        attributeName="x"
                        attributeType="XML"
                        begin="0s"
                        dur="5s"
                        from={300}
                        to={50}
                        fill="freeze"
                    />
                    <animate
                        repeatCount="indefinite"
                        attributeName="y"
                        attributeType="XML"
                        begin="0s"
                        dur="5s"
                        from={150}
                        to={50}
                        fill="freeze"
                    />
                    <animate
                        repeatCount="indefinite"
                        attributeName="width"
                        attributeType="XML"
                        begin="0s"
                        dur="5s"
                        from={10}
                        to={300}
                        fill="freeze"
                    />
                    <animate
                        repeatCount="indefinite"
                        attributeName="height"
                        attributeType="XML"
                        begin="0s"
                        dur="5s"
                        from={10}
                        to={150}
                        fill="freeze"
                    />
                    <animate
                        repeatCount="indefinite"
                        attributeName="fill"
                        attributeType="CSS"
                        from="lime"
                        to="red"
                        begin="2s"
                        dur="4s"
                        fill="freeze"
                    />
                </rect>
            </svg>
            <svg width="500" height="500">
                <rect id="rec" x="300" y="100" width="300" height="100" fill="lime">
                    <animate
                        attributeName="x"
                        attributeType="XML"
                        begin="0s"
                        dur="6s"
                        fill="freeze"
                        from="300"
                        to="0"
                    />
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        begin="0s"
                        dur="6s"
                        fill="freeze"
                        from="100"
                        to="0"
                    />
                    <animate
                        attributeName="width"
                        attributeType="XML"
                        begin="0s"
                        dur="6s"
                        fill="freeze"
                        from="300"
                        to="800"
                    />
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        begin="0s"
                        dur="6s"
                        fill="freeze"
                        from="100"
                        to="300"
                    />
                </rect>
                Sorry, your browser does not support inline SVG.
            </svg>
        </>
    );
}

export default SvgSizeGrowing;
