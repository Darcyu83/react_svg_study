import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgLine() {
    return (
        <svg width={SVG_OUTTER_SIZE} height={SVG_OUTTER_SIZE}>
            {/* 직선 */}
            <line x1={0} y1={0} x2={200} y2={200} stroke="red" strokeWidth={2} />
            {/* 곡선 */}
            <polyline points="50,0 100,20 100,30 80,40 90,50 " fill="none" stroke="blue" strokeWidth={2} />
        </svg>
    );
}

export default SvgLine;
