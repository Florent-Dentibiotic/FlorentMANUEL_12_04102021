import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function Radar(radarData) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = d3
            .select('.radar-box')
            .append('svg')
            .attr('width', 250)
            .attr('height', 250)
            .style('background', '#000')
            .style('border-radius', '5px')

        setSvgWeight(SvgWeightCreation)
    }, [])
    return (
        <div className="radar-box rounded-md flex items-center justify-center">
            <div>{console.log(radarData.radarData.data[0].value)}</div>
        </div>
    )
}

export default Radar
