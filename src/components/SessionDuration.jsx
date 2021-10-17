import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function SessionDuration(sessionData) {
    const [SvgSessions, setSvgWeight] = useState()

    useEffect(() => {
        let x = d3.scaleLinear().domain([1, 7]).range([0, 250])

        let y = d3
            .scaleLinear()
            .domain([
                d3.min(sessionData.sessionData, (d) => d.sessionLength) - 5,
                d3.max(sessionData.sessionData, (d) => d.sessionLength),
            ])
            .range([100, 0])

        let valueLine = d3
            .line()
            .x(function (d) {
                return x(d.day)
            })
            .y(function (d) {
                return y(d.sessionLength)
            })
            .curve(d3.curveBumpX)

        const SvgWeightCreation = () => {
            const svg = d3
                .select('.session-box')
                .attr('width', 250)
                .attr('height', 250)
                .attr('class', 'bg-red-600')
                .style('border-radius', '5px')

            const path = svg
                .append('g')
                .attr('transform', 'translate(0, 100)')
                .append('path')
                .attr('fill', 'none')
                .attr('stroke', '#fff')
                .attr('stroke-width', '2px')
                .attr('stroke-dasharray', 250)
                .attr('stroke-dashoffset', 250)
                .attr('d', valueLine(sessionData.sessionData))
            path.transition()
                .duration(600)
                .attr('stroke-dasharray', 0)
                .attr('stroke-dashoffset', 0)

            /* MOUSE OVER ANIMATIONS */
            sessionData.sessionData.map((data, index) => {
                const animations = svg.append('g')
                animations
                    .append('rect')
                    .attr('height', 250)
                    .attr('width', 250 - index * 41.5)
                    .attr('fill', '#000000')
                    .attr('x', function (d) {
                        return index * 41.5
                    })
                    .attr('opacity', 0)
                    .on('mouseover', function () {
                        d3.select(this)
                            .transition()
                            .duration('150')
                            .attr('opacity', '.2')
                        d3.select(`#circle${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '1')
                        d3.select(`#infos${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '1')
                        d3.select(`#time${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '1')
                    })
                    .on('mouseout', function () {
                        d3.select(this)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                        d3.select(`#circle${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                        d3.select(`#infos${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                        d3.select(`#time${index}`)
                            .transition()
                            .duration('150')
                            .attr('opacity', '0')
                    })

                animations
                    .append('circle')
                    .attr('id', 'circle' + index)
                    .attr('cx', function (d) {
                        return x(data.day)
                    })
                    .attr('cy', function (d) {
                        return y(data.sessionLength)
                    })
                    .attr('r', 4)
                    .attr('fill', 'white')
                    .attr('transform', 'translate(0, 100)')
                    .attr('opacity', '0')

                animations
                    .append('rect')
                    .attr('id', 'infos' + index)
                    .attr('height', 25)
                    .attr('width', 39)
                    .attr('fill', '#fff')
                    .attr('x', function (d) {
                        return x(data.day)
                    })
                    .attr('y', function (d) {
                        return y(data.sessionLength)
                    })
                    .attr('transform', 'translate(0, 70)')
                    .attr('opacity', 0)

                animations
                    .append('text')
                    .attr('id', 'time' + index)
                    .text(data.sessionLength + ' min')
                    .attr('font-size', '8')
                    .attr('fill', 'black')
                    .attr('x', function (d) {
                        return x(data.day)
                    })
                    .attr('y', function (d) {
                        return y(data.sessionLength)
                    })
                    .attr('transform', 'translate(7, 85)')
                    .attr('opacity', 0)

                // eslint-disable-next-line array-callback-return
                return
            })
        }
        setSvgWeight(SvgWeightCreation)
    }, [SvgSessions, sessionData.sessionData])

    return (
        <>
            <div className="relative rounded-md flex justify-center items-center bg-red-600">
                <svg className="session-box">
                    <text
                        x="32"
                        y="50"
                        fill="#FFFFFF"
                        fontSize="15"
                        className="opacity-50"
                    >
                        Durée moyenne des
                    </text>
                    <text
                        x="32"
                        y="80"
                        fill="#FFFFFF"
                        fontSize="15"
                        className="opacity-50"
                    >
                        sessions
                    </text>
                    <text
                        x="21"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        L
                    </text>
                    <text
                        x="55"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        M
                    </text>
                    <text
                        x="89"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        M
                    </text>
                    <text
                        x="123"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        J
                    </text>
                    <text
                        x="157"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        V
                    </text>
                    <text
                        x="191"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        S
                    </text>
                    <text
                        x="225"
                        y="225"
                        fill="#FFFFFF"
                        fontSize="12"
                        className="opacity-50"
                    >
                        D
                    </text>
                </svg>
            </div>
        </>
    )
}

export default SessionDuration
