import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgLooping() {
    return (
        <svg width={400} height={200}>
            <rect x={0} y={0} width="100%" height="100%" fill="blue">
                <animate
                    attributeType="CSS"
                    attributeName="opacity"
                    from={1}
                    to={0}
                    dur="2s"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>
    );
}

export default SvgLooping;
