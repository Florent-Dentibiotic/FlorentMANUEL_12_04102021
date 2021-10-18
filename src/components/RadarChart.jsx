import { useParams } from 'react-router'
import RadarChartD3 from '../D3/RadarChartD3'
import useFetchPerf from '../services/PerformanceService'
import * as d3 from 'd3'

function RadarChart() {
    const { id } = useParams()
    const { performanceData, performanceLoaded } = useFetchPerf(id)

    /** Static Hexagons construction */
    function newHexagon(size) {
        return `M125 ${130 - size}, ${125 + Math.sin(Math.PI / 3) * size} ${
            130 - Math.cos(Math.PI / 3) * size
        }, ${125 + Math.sin(Math.PI / 3) * size} ${
            130 + Math.cos(Math.PI / 3) * size
        }, 125 ${130 + size}, ${125 - Math.sin(Math.PI / 3) * size} ${
            130 + Math.cos(Math.PI / 3) * size
        }, ${125 - Math.sin(Math.PI / 3) * size} ${
            130 - Math.cos(Math.PI / 3) * size
        }, 125 ${130 - size}`
    }

    const svg = d3
        .select('.radar-box')
        .attr('width', 250)
        .attr('height', 250)
        .style('background', '#000')
        .style('border-radius', '5px')

    svg.append('g')
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('d', newHexagon(85))

    svg.append('g')
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('d', newHexagon(65))

    svg.append('g')
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('d', newHexagon(45))

    svg.append('g')
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('d', newHexagon(25))

    svg.append('g')
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('d', newHexagon(12))

    return (
        <>
            {performanceLoaded && (
                <RadarChartD3 perfs={performanceData.perfs} />
            )}
            <svg
                className="radar-box bg-black rounded"
                width="250"
                height="250"
            >
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
        </>
    )
}

export default RadarChart
