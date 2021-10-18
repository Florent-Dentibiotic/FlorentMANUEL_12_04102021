import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function RadarChart(userPerformanceData) {
    const [SvgRadar, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = () => {
            const cardio = userPerformanceData.userPerformanceData.cardio
            const energy = userPerformanceData.userPerformanceData.energy
            const endurance = userPerformanceData.userPerformanceData.endurance
            const strength = userPerformanceData.userPerformanceData.strength
            const speed = userPerformanceData.userPerformanceData.speed
            const intensity = userPerformanceData.userPerformanceData.intensity

            const maxValue = [
                cardio,
                energy,
                endurance,
                strength,
                speed,
                intensity,
            ].sort(function (a, b) {
                return b - a
            })

            function resizeValue(size) {
                return (85 * size) / (maxValue[0] + 10)
            }

            const cardioCoord = {
                axeX: 125 - Math.sin(Math.PI / 3) * resizeValue(cardio),
                axeY: 130 - Math.cos(Math.PI / 3) * resizeValue(cardio),
            }

            const energyCoord = {
                axeX: 125 - Math.sin(Math.PI / 3) * resizeValue(energy),
                axeY: 130 + Math.cos(Math.PI / 3) * resizeValue(energy),
            }
            const enduranceCoord = {
                axeX: 125,
                axeY: 130 + resizeValue(endurance),
            }
            const strengthCoord = {
                axeX: 125 + Math.sin(Math.PI / 3) * resizeValue(strength),
                axeY: 130 + Math.cos(Math.PI / 3) * resizeValue(strength),
            }
            const speedCoord = {
                axeX: 125 + Math.sin(Math.PI / 3) * resizeValue(speed),
                axeY: 130 - Math.cos(Math.PI / 3) * resizeValue(speed),
            }
            const intensityCoord = {
                axeX: 125,
                axeY: 130 - resizeValue(intensity),
            }

            function newHexagon(size) {
                return `M125 ${130 - size}, ${
                    125 + Math.sin(Math.PI / 3) * size
                } ${130 - Math.cos(Math.PI / 3) * size}, ${
                    125 + Math.sin(Math.PI / 3) * size
                } ${130 + Math.cos(Math.PI / 3) * size}, 125 ${130 + size}, ${
                    125 - Math.sin(Math.PI / 3) * size
                } ${130 + Math.cos(Math.PI / 3) * size}, ${
                    125 - Math.sin(Math.PI / 3) * size
                } ${130 - Math.cos(Math.PI / 3) * size}, 125 ${130 - size}`
            }

            const dPath = `M${intensityCoord.axeX} ${intensityCoord.axeY}, ${speedCoord.axeX} ${speedCoord.axeY}, ${strengthCoord.axeX} ${strengthCoord.axeY}, ${enduranceCoord.axeX} ${enduranceCoord.axeY},${energyCoord.axeX} ${energyCoord.axeY}, ${cardioCoord.axeX} ${cardioCoord.axeY}Z`

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

            svg.append('g')
                .append('path')
                .attr('fill', '#FF0101')
                .attr('d', newHexagon(0))
                .transition()
                .duration(600)
                .attr('d', dPath)
                .attr('class', 'opacity-70')
        }

        setSvgWeight(SvgWeightCreation)
    }, [
        SvgRadar,
        userPerformanceData.userPerformanceData.cardio,
        userPerformanceData.userPerformanceData.endurance,
        userPerformanceData.userPerformanceData.energy,
        userPerformanceData.userPerformanceData.intensity,
        userPerformanceData.userPerformanceData.speed,
        userPerformanceData.userPerformanceData.strength,
    ])
    return (
        <svg className="radar-box">
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
    )
}

export default RadarChart
