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

        const SvgWeightCreation = () => {
            const svg = d3
                .select('.session-box')
                .attr('width', 250)
                .attr('height', 250)
                .style('background', '#FF0000')
                .style('border-radius', '5px')
                .append('g')
                .attr('transform', 'translate(0, 100)')
                .append('path')
                .attr('fill', 'none')
                .attr('stroke', '#fff')
                .attr('stroke-width', '2px')
                .attr('d', valueLine(sessionData.sessionData))
        }

        // const groupX = SvgWeightCreation.append('g').attr(
        //     'transform',
        //     'translate(0, 210)'
        // )

        // const axeDays = d3.scaleOrdinal(Days)

        // const axeX = d3.axisBottom(axeDays)

        // groupX.call(axeX).style('fontSize', '14px')

        setSvgWeight(SvgWeightCreation)
    }, [])

    return (
        <>
            <div className="relative rounded-md flex items-center">
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
