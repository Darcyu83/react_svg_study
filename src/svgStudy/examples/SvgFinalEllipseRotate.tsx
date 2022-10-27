import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgFinalEllipseRotate() {
    return (
        <svg width={"100%"} height={300}>
            <rect x={0} y={0} width="100%" height="100%" fill="#ddd" />
            <g id="ellipses" transform="translate(250 250)">
                <ellipse rx={100} ry={0} opacity={0.3}>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="7s"
                        from="0"
                        to="360"
                        repeatCount="indefinite"
                    />
                    <animate attributeName="cx" dur="8s" values="-20; 120; -20" repeatCount="indefinite" />
                    <animate attributeName="ry" dur="3s" values="10; 60; 10;" repeatCount="indefinite" />
                </ellipse>
            </g>

            <use href="#ellipses" transform="rotate(72 390 150)" />
            <use href="#ellipses" transform="rotate(144 390 150)" />
            <use href="#ellipses" transform="rotate(216 390 150)" />
            <use href="#ellipses" transform="rotate(288 390 150)" />
        </svg>
    );
}

export default SvgFinalEllipseRotate;
