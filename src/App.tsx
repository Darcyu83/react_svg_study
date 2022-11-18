import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import SvgCircle from "./svgStudy/SvgCircle";
import SvgRect from "./svgStudy/SvgRect";
import SvgEllipse from "./svgStudy/SvgEllipse";
import SvgLine from "./svgStudy/SvgLine";
import SvgPolygon from "./svgStudy/SvgPolygon";
import SvgPath from "./svgStudy/SvgPath";
import SvgQuadraticCurve from "./svgStudy/SvgQuadraticCurve";
import SvgStrokeStyle from "./svgStudy/SvgStrokeStyle";
import SvgDefsFilterBlurOffset from "./svgStudy/SvgDefsFilterBlurOffset";
import SvgDefsGradient from "./svgStudy/SvgDefsGradient";
import SvgFeBlendFilter from "./svgStudy/examples/SvgFeBlendFilter";
import SvgBlurStrokeText from "./svgStudy/examples/SvgBlurStrokeText";
import SvgEngraveEmboss from "./svgStudy/examples/SvgEngraveEmboss";
import SvgLooping from "./svgStudy/examples/SvgLooping";
import SvgSizeGrowing from "./svgStudy/examples/SvgSizeGrowing";
import SvgSequentialLooping from "./svgStudy/examples/SvgSequentialLooping";
import SvgMovingText from "./svgStudy/examples/SvgMovingText";
import SvgMovingRotatingText from "./svgStudy/examples/SvgMovingRotatingText";
import SvgFinalEllipseRotate from "./svgStudy/examples/SvgFinalEllipseRotate";
import SvgViewBox from "./svgStudy/SvgViewBox";
import SvgMask from "./svgStudy/SvgMask";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

const InnerContainer = styled.div`
    margin-top: 10px;
`;

function App() {
    const [isExampleShown, setIsExampleShown] = useState(true);
    const [isTutorialShown, setIsTutorialShown] = useState(false);

    return (
        <>
            <h1
                style={{ backgroundColor: "tomato" }}
                onClick={() => {
                    setIsExampleShown((curr) => !curr);
                }}
            >
                Click here to show SVG Example Practice
            </h1>
            {/* Example Practice  */}
            {isExampleShown && (
                <Container>
                    {/* SvgMask test */}
                    <InnerContainer>
                        <h1>SvgMask</h1>
                        <div style={{ width: 100 }}>
                            <SvgMask />
                        </div>
                    </InnerContainer>
                    {/* ViewBox test */}
                    <InnerContainer>
                        <h1>SvgViewBox</h1>
                        <SvgViewBox />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgFinalEllipseRotate</h1>
                        <SvgFinalEllipseRotate />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgMovingRotatingText</h1>
                        <SvgMovingRotatingText />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgMovingText</h1>
                        <SvgMovingText />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgSequentialLooping</h1>
                        <SvgSequentialLooping />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgSizeGrowing</h1>
                        <SvgSizeGrowing />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgLooping</h1>
                        <SvgLooping />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>SvgEngraveEmboss</h1>
                        <SvgEngraveEmboss />
                    </InnerContainer>

                    <InnerContainer>
                        <h1>Svg Blur Stroke Text</h1>
                        <SvgBlurStrokeText />
                    </InnerContainer>

                    {/* Svg feBlend Filter */}
                    <InnerContainer>
                        <h1>Svg feBlend Filter</h1>
                        <SvgFeBlendFilter />
                    </InnerContainer>
                </Container>
            )}
            <h1
                style={{ backgroundColor: "teal" }}
                onClick={() => {
                    setIsTutorialShown((curr) => !curr);
                }}
            >
                Click here to show Tutorial Practice
            </h1>

            {/* Tutorial Practice  */}
            {isTutorialShown && (
                <Container>
                    {/* SvgGradient */}
                    <InnerContainer>
                        <h1>Svg Gradient</h1>
                        <SvgDefsGradient />
                    </InnerContainer>

                    {/* SvgFilterBlurOffset */}
                    <InnerContainer>
                        <h1>Svg Filter Blur Offset</h1>
                        <SvgDefsFilterBlurOffset />
                    </InnerContainer>

                    {/* SvgStrokeStyle */}
                    <InnerContainer>
                        <h1>Stroke Style</h1>
                        <SvgStrokeStyle />
                    </InnerContainer>

                    {/* SvgQuadraticCurve */}
                    <InnerContainer>
                        <h1>Quadratic Bezier Curve</h1>
                        <h3> Capital letters means absolutely positioned, lower cases means relatively positioned.</h3>
                        <SvgQuadraticCurve />
                    </InnerContainer>

                    {/* SvgPath */}
                    <InnerContainer>
                        <h1>Path</h1>
                        <SvgPath />
                    </InnerContainer>

                    {/* SvgPolygon */}
                    <InnerContainer>
                        <h1>Polygon</h1>
                        <SvgPolygon />
                    </InnerContainer>

                    {/* SvgLine */}
                    <InnerContainer>
                        <h1>Line</h1>
                        <SvgLine />
                    </InnerContainer>

                    {/* SvgEllipse */}
                    <InnerContainer>
                        <h1>Ellipse</h1>
                        <SvgEllipse />
                    </InnerContainer>

                    {/* SvgRect */}
                    <InnerContainer>
                        <h1>Rectagular</h1>
                        <SvgRect />
                    </InnerContainer>

                    {/* SvgCircle */}
                    <InnerContainer>
                        <h1>Circle</h1>
                        <SvgCircle />
                    </InnerContainer>
                </Container>
            )}
        </>
    );
}

export default App;
