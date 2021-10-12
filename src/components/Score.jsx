import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function Score(userScore) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = () => {
            const svg = d3
                .select('.score-box')
                .attr('width', 250)
                .attr('height', 250)
                .attr('class', 'bg-gray-50')
                .style('border-radius', '5px')

            svg.append('arc')
                .attr('innerRadius', '0')
                .attr('outerRadius', '100')
                .attr('startAngle', '0')
                .attr('endAngle', 360 * userScore.userScore)
                .attr('transform', 'translate(125, 125)')
                .attr('stroke', '#000')
                .attr('stroke-width', '6px')
        }

        setSvgWeight(SvgWeightCreation)
    }, [])
    return (
        <div className="rounded-md flex items-center justify-end">
            <svg className="score-box">
                <circle cx="125" cy="125" r="87" fill="white"></circle>
                <text x="32" y="35" fill="#20253A" fontSize="15">
                    Score
                </text>
                <text
                    x="109"
                    y="115"
                    fill="#20253A"
                    fontSize="19"
                    fontWeight="bold"
                >
                    {userScore.userScore * 100}%
                </text>
                <text
                    x="105"
                    y="145"
                    fill="#20253A"
                    fontSize="16"
                    className="opacity-50"
                >
                    de votre
                </text>
                <text
                    x="105"
                    y="175"
                    fill="#20253A"
                    fontSize="16"
                    className="opacity-50"
                >
                    objectif
                </text>
            </svg>
        </div>
    )
}

export default Score
