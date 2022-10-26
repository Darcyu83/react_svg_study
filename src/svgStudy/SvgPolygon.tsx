import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgPolygon() {
    return (
        <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2}>
            {/* 직선 */}
            <polygon
                points="100,10 40,198 190,78 10,78 160,198"
                fill={"dodgerblue"}
                stroke={"purple"}
                strokeWidth={2}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SvgPolygon;
