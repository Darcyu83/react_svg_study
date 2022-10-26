import React from "react";
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

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

const InnerContainer = styled.div`
    margin-top: 10px;
`;

function App() {
    return (
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
    );
}

export default App;
