import * as d3 from 'd3'
import { useState, useEffect } from 'react'

function Weight({ activitiesData }) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = () => {
            const maxKilo = d3.max(activitiesData, (d) => d.kilo)
            const max = d3.max(activitiesData, (d) => d.calories)

            const x = d3
                .scaleBand()
                .domain([1, 2, 3, 4, 5, 6, 7])
                .range([0, 685])

            const y = d3.scaleLinear().domain([0, max]).range([140, 0])

            const yKilo = d3.scaleLinear().domain([0, maxKilo]).range([140, 0])

            const svg = d3
                .select('.weight-box')
                .append('svg')
                .attr('width', 825)
                .attr('height', 320)
                .style('background', '#FBFBFB')
                .style('border-radius', '5px')

            const graph = svg
                .append('g')
                .attr('width', 685)
                .attr('height', 140)
                .attr('transform', 'translate(50, 110)')

            const groupeX = graph
                .append('g')
                .attr('transform', `translate(0, 140)`)

            const groupeY = graph
                .append('g')
                .attr('transform', `translate(685, 0)`)

            const groupKilo = graph
                .append('g')
                .attr('transform', `translate(40, 0)`)

            const groupCalories = graph
                .append('g')
                .attr('transform', `translate(40, 0)`)

            const rectKilo = groupKilo
                .selectAll('rect')
                .data(activitiesData)
                .enter()
                .append('rect')
                .attr('width', 7)
                .attr('height', function (d) {
                    return 140 - d.kilogram
                })
                .attr('fill', '#282D30')
                .attr('x', function (d, i) {
                    return x(i + 1)
                })
                .attr('y', function (d) {
                    return d.kilogram
                })

            const rectCalories = groupCalories
                .selectAll('rect')
                .data(activitiesData)
                .enter()
                .append('rect')
                .attr('width', 7)
                .attr('height', function (d) {
                    return 140 - y(d.calories)
                })
                .attr('fill', '#E60000')
                .attr('x', function (d, i) {
                    return x(i + 1) + 12
                })
                .attr('y', function (d) {
                    return y(d.calories)
                })

            const axeX = d3.axisBottom(x).ticks(7)
            const axeY = d3.axisRight(yKilo)

            groupeX.call(axeX).style('font-size', '14px')
            groupeY.call(axeY).style('font-size', '14px')
        }

        setSvgWeight(SvgWeightCreation)
    }, [SvgWeight, activitiesData])

    return (
        <div className="rounded-md col-span-3 weight-box">
            {console.log(activitiesData)}
        </div>
    )
}

export default Weight
