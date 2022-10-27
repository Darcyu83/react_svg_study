import React from "react";
import { SVG_OUTTER_SIZE } from "../../style/constants";

function SvgSequentialLooping() {
    return (
        <svg width={400} height={200}>
            <rect x={0} y={0} width="30%" height="30%">
                <animate
                    id="ani1"
                    attributeName="fill"
                    attributeType="CSS"
                    from={"red"}
                    to={"blue"}
                    dur="3s"
                    fill="freeze"
                />
            </rect>
            <rect x={0} y={"33%"} width="30%" height="30%" fill="blue">
                <animate
                    id="ani2"
                    attributeName="fill"
                    attributeType="CSS"
                    from={"blue"}
                    to={"yellow"}
                    dur="3s"
                    fill="freeze"
                    begin={"ani1.end"}
                />
            </rect>
            <rect x={0} y={"66%"} width="30%" height="30%" fill="yellow">
                <animate
                    id="ani2"
                    attributeName="fill"
                    attributeType="CSS"
                    from={"yellow"}
                    to={"green"}
                    dur="3s"
                    fill="freeze"
                    begin={"ani2.end"}
                />
            </rect>
        </svg>
    );
}

export default SvgSequentialLooping;
