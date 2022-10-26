import React from "react";
import { SVG_OUTTER_SIZE } from "../style/constants";

function SvgDefsFilterBlurOffset() {
    return (
        <>
            {/* Blur */}
            <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2}>
                <defs>
                    <filter id="blur" x="0" y="0">
                        <feGaussianBlur in={"SourceGraphic"} stdDeviation={2} />
                    </filter>
                    {/* offsetWithOriginalColor */}
                    <filter id="offsetWithOriginalColor" x="0" y="0" width={"150%"} height="150%">
                        {/* 오브젝트 카피 */}
                        <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />

                        {/* 블러 처리 : 오프셋 Reslut를 받아서 사용 in="offOut" */}
                        <feGaussianBlur result={"blurOut"} in="offOut" stdDeviation={10} />

                        {/* 오리지널 이미지와 함침 :  블러 Reslut를 받아서 사용  in2="blurOut" */}
                        {/* The in="SourceGraphic" part defines that the effect is created for the entire element */}
                        <feBlend in={"SourceGraphic"} in2={"blurOut"} mode="normal" />
                    </filter>
                    {/* offsetWithBlackShadow */}
                    <filter id="offsetWithBlackShadow" x="0" y="0" width={"150%"} height="150%">
                        {/* 오브젝트 카피 */}
                        <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
                        {/* 블러 처리 : 오프셋 Reslut를 받아서 사용 in="offOut" */}
                        <feGaussianBlur result={"blurOut"} in="offOut" stdDeviation={10} />

                        {/* 오리지널 이미지와 함침 :  블러 Reslut를 받아서 사용  in2="blurOut" */}
                        {/* The in="SourceGraphic" part defines that the effect is created for the entire element */}
                        <feBlend in={"SourceGraphic"} in2={"blurOut"} mode="normal" />
                    </filter>

                    <filter id="offsetWithColorShadow" x="0" y="0" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
                        <feColorMatrix
                            result="matrixOut"
                            in="offOut"
                            type="matrix"
                            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
                        />
                        <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation={10} />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>

                <path
                    d="M 10 10 l 150 0 l 0 150 Z"
                    stroke="blue"
                    strokeWidth={2}
                    strokeLinecap="butt"
                    strokeDasharray={"5,5"}
                    fill={"dodgerblue"}
                    filter={"url(#blur)"}
                />
                <text x={50} y={50} fill="red">
                    Blur
                </text>
            </svg>
            {/* offset + blur 처리 */}
            <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2}>
                <rect
                    width={150}
                    height={150}
                    stroke="green"
                    fill="dodgerblue"
                    filter="url(#offsetWithOriginalColor)"
                />
            </svg>

            {/* offset + blur + BLACK SHADOW*/}
            <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2}>
                <rect width={150} height={150} stroke="green" fill="dodgerblue" filter="url(#offsetWithBlackShadow)" />
            </svg>

            {/* offset + blur + original color + BLACK SHADOW*/}
            <svg width={SVG_OUTTER_SIZE * 2} height={SVG_OUTTER_SIZE * 2}>
                <rect width={150} height={150} stroke="green" fill="dodgerblue" filter="url(#offsetWithColorShadow)" />
            </svg>
        </>
    );
}

export default SvgDefsFilterBlurOffset;
