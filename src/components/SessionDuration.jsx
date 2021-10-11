import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function SessionDuration(sessionData) {
    const [SvgWeight, setSvgWeight] = useState()
    let x = d3
        .scaleLinear()
        .domain(d3.extent(sessionData.sessionData, (d) => d.day))
        .range([0, 250])

    let y = d3
        .scaleLinear()
        .domain([0, d3.max(sessionData.sessionData, (d) => d.sessionLength)])
        .range([130, 0])

    //const Days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    useEffect(() => {
        let valueLine = d3
            .line()
            .x(function (d) {
                return x(d.day)
            })
            .y(function (d) {
                return y(d.sessionLength)
            })
            .curve(d3.curveBundle)

        const SvgWeightCreation = d3
            .select('.session-box')
            .append('svg')
            .attr('width', 250)
            .attr('height', 250)
            .style('background', '#FF0000')
            .style('border-radius', '5px')
            .append('g')
            .attr('transform', 'translate(0, 80)')
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', '#fff')
            .attr('stroke-width', '2px')
            .attr('d', valueLine(sessionData.sessionData))

        // const groupX = SvgWeightCreation.append('g').attr(
        //     'transform',
        //     'translate(0, 210)'
        // )

        // const axeDays = d3.scaleOrdinal(Days)

        // const axeX = d3.axisBottom(axeDays)

        // groupX.call(axeX).style('font-size', '14px')

        setSvgWeight(SvgWeightCreation)
    }, [])

    return (
        <>
            <div className="relative session-box rounded-md flex items-center">
                <p className="absolute top-1/2 left-1/2"></p>
            </div>
        </>
    )
}

export default SessionDuration
