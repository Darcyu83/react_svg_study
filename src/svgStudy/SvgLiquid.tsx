import React from "react";
import { createCurve } from "../utils/svgUtils";

interface IProps {}

function SvgLiquid({}: IProps) {
    const x_width = 200;
    const y_height = 400;

    const left_top = { x: 0, y: 0 };
    const right_top = { x: x_width, y: 0 };
    const left_bottom = { x: 0, y: y_height };
    const right_bottom = { x: x_width, y: y_height };

    const min_ledge_as_r = 80;

    const curve_start = { x: x_width / 2, y: y_height / 2 - min_ledge_as_r * 2 };

    // start to peak
    const curve_ctrl1 = { x: x_width / 2, y: y_height / 2 - min_ledge_as_r * 2 + min_ledge_as_r * 2 * 0.5 };
    const curve_ctrl2 = {
        x: x_width / 2 + min_ledge_as_r,
        y: y_height / 2 - min_ledge_as_r * 2 + min_ledge_as_r * 2 * 0.5,
    };
    const peak = { x: x_width / 2 + min_ledge_as_r, y: y_height / 2 };

    // peak to end
    const curve_ctrl3 = {
        x: x_width / 2 + min_ledge_as_r,
        y: y_height / 2 + min_ledge_as_r * 2 - min_ledge_as_r * 2 * 0.5,
    };
    const curve_ctrl4 = { x: x_width / 2, y: y_height / 2 + min_ledge_as_r * 2 - min_ledge_as_r * 2 * 0.5 };
    const end = { x: x_width / 2, y: y_height / 2 + min_ledge_as_r * 2 };

    const d = [
        "M 0 0",
        `H ${curve_start.x}`,
        `V ${curve_start.y}`,
        `C ${curve_ctrl1.x} ${curve_ctrl1.y} ${curve_ctrl2.x} ${curve_ctrl2.y} ${peak.x} ${peak.y}`,
        `C ${curve_ctrl3.x} ${curve_ctrl3.y} ${curve_ctrl4.x} ${curve_ctrl4.y} ${end.x} ${end.y}`,
        `V ${y_height}`,
        `H ${0}`,
    ].join(" ");

    return (
        <svg width={200} height={400}>
            <mask id={"liquid"}>
                {/* <rect x={0} y={0} width={200} height={400} fill="black" /> */}
                <path d={d} fill="white" />
            </mask>
            {/* 삼각형  */} <circle r={80} cx={150} cy={200} />
            <path d={d} fill="white" />
            <circle r={10} cx={curve_start.x} cy={curve_start.y} fill="red" />
            <circle r={10} cx={curve_ctrl1.x} cy={curve_ctrl1.y} fill="yellow" />
            <circle r={10} cx={curve_ctrl2.x} cy={curve_ctrl2.y} fill="green" />
            <circle r={10} cx={peak.x} cy={peak.y} fill="red" />
            <circle r={10} cx={curve_ctrl3.x} cy={curve_ctrl3.y} fill="blue" />
            <circle r={10} cx={curve_ctrl4.x} cy={curve_ctrl4.y} fill="purple" />
            <circle r={10} cx={end.x} cy={end.y} fill="red" />
            {/* <rect x={0} y={0} width={200} height={400} fill="dodgerblue" mask="url(#liquid)" /> */}
        </svg>
    );
}

export default SvgLiquid;
