import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function SessionDuration(sessionData) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = d3
            .select('.session-box')
            .append('svg')
            .attr('width', 250)
            .attr('height', 250)
            .style('background', '#FF0000')
            .style('border-radius', '5px')
        setSvgWeight(SvgWeightCreation)
    }, [])

    return (
        <>
            <div className="relative session-box rounded-md flex items-center justify-center">
                <p className="absolute top-1/2 left-1/2">
                    {sessionData.sessionData[0].sessionLength}
                </p>
            </div>
        </>
    )
}

export default SessionDuration
