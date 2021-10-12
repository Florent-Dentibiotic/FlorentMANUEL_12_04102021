import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function Radar(radarData) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = d3
            .select('.radar-box')
            .attr('width', 250)
            .attr('height', 250)
            .style('background', '#000')
            .style('border-radius', '5px')

        setSvgWeight(SvgWeightCreation)
    }, [])
    return (
        <div className="rounded-md flex items-center justify-center">
            <svg className="radar-box">
                <path
                    d="M125 45, 200 90, 200 170, 125 215 , 50 170, 50 90 Z"
                    fill="transparent"
                    stroke="white"
                />
                <path
                    d="M125 68, 180 100, 180 160, 125 192 , 70 160, 70 100 Z"
                    fill="transparent"
                    stroke="white"
                />
                <path
                    d="M125 90, 162 110, 162 150, 125 171, 88 150, 88 110 Z"
                    fill="transparent"
                    stroke="white"
                />
                <path
                    d="M125 109, 144 120, 144 140, 125 152, 106 140, 106 120 Z"
                    fill="transparent"
                    stroke="white"
                />
                <path
                    d="M125 120, 134 125, 134 135, 125 141, 116 135, 116 125 Z"
                    fill="transparent"
                    stroke="white"
                />
                <text x="100" y="30" fill="#fff" fontSize="12">
                    Intensité
                </text>
                <text x="210" y="90" fill="#fff" fontSize="12">
                    Vitesse
                </text>
                <text x="210" y="170" fill="#fff" fontSize="12">
                    Force
                </text>
                <text x="100" y="230" fill="#fff" fontSize="12">
                    Endurance
                </text>
                <text x="5" y="170" fill="#fff" fontSize="12">
                    Energie
                </text>
                <text x="5" y="90" fill="#fff" fontSize="12">
                    Cardio
                </text>
            </svg>
            <div>{console.log(radarData.radarData.data[0].value)}</div>
        </div>
    )
}

export default Radar
