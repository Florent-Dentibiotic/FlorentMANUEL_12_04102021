import * as d3 from 'd3'
import { useEffect } from 'react/cjs/react.development'
import PropTypes from 'prop-types'

function RadarChartD3({ perfs }) {
    useEffect(() => {
        const cardio = perfs.cardio
        const energy = perfs.energy
        const endurance = perfs.endurance
        const strength = perfs.strength
        const speed = perfs.speed
        const intensity = perfs.intensity

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

        const dPath = `M${intensityCoord.axeX} ${intensityCoord.axeY}, ${speedCoord.axeX} ${speedCoord.axeY}, ${strengthCoord.axeX} ${strengthCoord.axeY}, ${enduranceCoord.axeX} ${enduranceCoord.axeY},${energyCoord.axeX} ${energyCoord.axeY}, ${cardioCoord.axeX} ${cardioCoord.axeY}Z`

        const svg = d3.select('.radar-box')

        svg.append('g')
            .append('path')
            .attr('fill', '#FF0101')
            .attr('d', newHexagon(0))
            .transition()
            .duration(600)
            .attr('d', dPath)
            .attr('class', 'opacity-70')
    }, [
        perfs.cardio,
        perfs.endurance,
        perfs.energy,
        perfs.intensity,
        perfs.speed,
        perfs.strength,
    ])

    return <> </>
}

export default RadarChartD3

RadarChartD3.propTypes = {
    perfs: PropTypes.object,
}
