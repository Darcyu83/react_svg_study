const vec2 = (x: number, y: number) => {
    "worklet";
    return { x, y };
};

interface XY {
    x: number;
    y: number;
}
export const createCurve = (c1: XY, c2: XY, to: XY) => {
    return `C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`;
};
