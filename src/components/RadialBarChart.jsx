import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function RadialBarChart(data) {
    const [SvgScore, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = () => {
            const svg = d3
                .select('.score-box')
                .attr('width', 250)
                .attr('height', 250)
                .attr('class', 'bg-gray-50')
                .style('border-radius', '5px')

            const arc = d3
                .arc()
                .innerRadius(82)
                .outerRadius(92)
                .startAngle(0)
                .endAngle(-Math.PI * 2 * data.userScore)
                .cornerRadius(5)

            svg.append('path')
                .attr('class', 'arc')
                .attr('fill', 'red')
                .attr('transform', 'translate(125, 125)')
                .attr('d', arc)
                .transition()
                .duration(600)
        }

        setSvgWeight(SvgWeightCreation)
    }, [SvgScore, data])
    return (
        <svg className="score-box">
            <circle cx="125" cy="125" r="87" fill="white"></circle>
            <text x="32" y="35" fill="#20253A" fontSize="15">
                Score
            </text>
            <text
                x="109"
                y="100"
                fill="#20253A"
                fontSize="19"
                fontWeight="bold"
            >
                {data.userScore * 100}%
            </text>
            <text
                x="102"
                y="130"
                fill="#20253A"
                fontSize="16"
                className="opacity-50"
            >
                de votre
            </text>
            <text
                x="105"
                y="160"
                fill="#20253A"
                fontSize="16"
                className="opacity-50"
            >
                objectif
            </text>
        </svg>
    )
}

export default RadialBarChart
