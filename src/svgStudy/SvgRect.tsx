import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgRect() {
    return (
        <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
            {/* 사각형 */}
            <rect
                x={0}
                y={0}
                rx="20"
                ry="20"
                width={80}
                height={80}
                style={{
                    // fillOpacity: 0.3,
                    fill: "red",
                    // strokeOpacity: 0.4,
                    stroke: "yellow",
                    strokeWidth: 2,
                    opacity: 0.5,
                }}
            />
        </svg>
    );
}

export default SvgRect;
