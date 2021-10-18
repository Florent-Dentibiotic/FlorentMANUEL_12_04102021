import * as d3 from 'd3'
import { useState, useEffect } from 'react'

function BarChart({ activitiesData }) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = () => {
            const minKilo = d3.min(activitiesData, (d) => d.kilogram)
            const maxKilo = d3.max(activitiesData, (d) => d.kilogram)
            const max = d3.max(activitiesData, (d) => d.calories)

            const x = d3
                .scaleBand()
                .domain(activitiesData.map((item) => item.day))
                .range([0, 685])
                .paddingInner(0.95)

            const y = d3
                .scaleLinear()
                .domain([0, max + 50])
                .range([140, 0])

            const yKilo = d3
                .scaleLinear()
                .domain([minKilo - 1, maxKilo + 1])
                .range([140, 0])

            const svg = d3
                .select('svg')
                .attr('width', 825)
                .attr('height', 320)
                .attr('class', 'bg-gray-50')
                .style('border-radius', '5px')

            const graph = svg
                .append('g')
                .attr('width', 685)
                .attr('height', 160)
                .attr('transform', 'translate(50, 110)')

            const groupeX = graph
                .append('g')
                .attr('transform', `translate(0, 139)`)

            const groupeXmiddle = graph
                .append('g')
                .attr('transform', `translate(0, 70)`)

            const groupeXtop = graph.append('g')

            const groupeY = graph
                .append('g')
                .attr('transform', `translate(700, 0)`)

            const groupKilo = graph
                .append('g')
                .attr('transform', `translate(-6, 0)`)
                .attr('width', 685)
                .attr('height', 140)

            const groupCalories = graph
                .append('g')
                .attr('transform', `translate(6, 0)`)

            const rectKilo = groupKilo
                .selectAll('line')
                .data(activitiesData)
                .enter()
                .append('line')
                .attr('x1', function (d) {
                    return x(d.day)
                })
                .attr('x2', function (d) {
                    return x(d.day)
                })
                .attr('y2', '140')
                .attr('y1', '140')
                .attr('stroke', '#000')
                .attr('stroke-width', '7px')
                .attr('stroke-linecap', 'round')

            rectKilo
                .transition()
                .duration(600)
                .attr('y2', function (d) {
                    return 140 - yKilo(d.kilogram)
                })

            const rectCalories = groupCalories
                .selectAll('line')
                .data(activitiesData)
                .enter()
                .append('line')
                .attr('fill', '#E60000')
                .attr('x1', function (d) {
                    return x(d.day)
                })
                .attr('x2', function (d) {
                    return x(d.day)
                })
                .attr('y2', '140')
                .attr('y1', '140')
                .attr('stroke', '#E60000')
                .attr('stroke-width', '7px')
                .attr('stroke-linecap', 'round')
                .attr('class', 'overflow-hidden')

            rectCalories
                .transition()
                .duration(600)
                .attr('y1', function (d) {
                    return y(d.calories)
                })

            graph
                .append('g')
                .append('rect')
                .attr('width', 730)
                .attr('height', 5)
                .attr('fill', '#FBFBFB')
                .attr('transform', `translate(-20, 140)`)

            let tickLabels = ['1', '2', '3', '4', '5', '6', '7']

            const axeX = d3
                .axisBottom(x)
                .tickSize(0)
                .tickFormat((d, i) => tickLabels[i])
            const axeY = d3.axisRight(yKilo).tickSize(0).ticks(3)

            groupeX.call(axeX).style('font-size', '14px')
            groupeXtop.call(axeX)
            groupeXmiddle.call(axeX)

            groupeX
                .select('.domain')
                .attr('stroke', '#DEDEDE')
                .attr('stroke-width', 1)

            groupeXtop
                .select('.domain')
                .attr('stroke', '#DEDEDE')
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', '2')

            groupeXmiddle
                .select('.domain')
                .attr('stroke', '#DEDEDE')
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', '2')

            groupeX
                .selectAll('.tick text')
                .attr('transform', 'translate(0, 10)')
                .attr('class', 'text-gray-500')

            groupeXmiddle.selectAll('.tick text').attr('opacity', '0')
            groupeXtop.selectAll('.tick text').attr('opacity', '0')

            groupeY.call(axeY).style('font-size', '14px')

            groupeY.select('.domain').attr('stroke-width', 0)
            groupeY
                .selectAll('.tick text')
                .attr('transform', 'translate(20, 0)')
                .attr('class', 'text-gray-500')

            /* MOUSE OVER ANIMATIONS */

            activitiesData.map((data, index) => {
                const animations = graph
                    .append('g')
                    .attr('transform', 'translate(-25, 0)')

                animations
                    .append('rect')
                    .attr('id', `rect${index}`)
                    .attr('width', 40)
                    .attr('height', 55)
                    .attr('fill', 'red')
                    .attr('x', function (d) {
                        return index * 113 + 50
                    })
                    .attr('y', -20)
                    .attr('opacity', '0')

                animations
                    .append('rect')
                    .attr('width', 50)
                    .attr('height', 140)
                    .attr('fill', '#C4C4C4')
                    .attr('x', function (d) {
                        return index * 113
                    })
                    .attr('opacity', '0')
                    .on('mouseover', function () {
                        d3.select(this)
                            .transition()
                            .duration('150')
                            .attr('opacity', '.3')
                        d3.select(`#rect${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '1')
                        d3.select(`#kg${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '1')
                        d3.select(`#cal${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '1')
                    })
                    .on('mouseout', function () {
                        d3.select(this)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                        d3.select(`#rect${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                        d3.select(`#kg${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                        d3.select(`#cal${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                    })

                animations
                    .append('text')
                    .attr('id', 'kg' + index)
                    .text(data.kilogram + 'kg')
                    .attr('font-size', '8')
                    .attr('fill', 'white')
                    .attr('x', function (d) {
                        return index * 113 + 60
                    })
                    .attr('opacity', '0')

                animations
                    .append('text')
                    .attr('id', 'cal' + index)
                    .text(data.calories + 'kCal')
                    .attr('font-size', '8')
                    .attr('fill', 'white')
                    .attr('x', function (d) {
                        return index * 113 + 55
                    })
                    .attr('y', 20)

                // eslint-disable-next-line array-callback-return
                return
            })
        }

        setSvgWeight(SvgWeightCreation)
    }, [SvgWeight, activitiesData])

    return (
        <svg>
            <text x="32" y="50" fill="#20253A" fontSize="15">
                Activité quotidienne
            </text>
            <circle cx="520" cy="44" r="4" fill="#20253A" />
            <text x="535" y="50" fill="#20253A" fontSize="15">
                Poids (kg)
            </text>
            <circle cx="620" cy="44" r="4" fill="#E60000" />
            <text x="635" y="50" fill="#20253A" fontSize="15">
                Calories Brulées (kCal)
            </text>
        </svg>
    )
}

export default BarChart
