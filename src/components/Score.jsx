import * as d3 from 'd3'
import { useEffect, useState } from 'react'

function Score(userScore) {
    const [SvgWeight, setSvgWeight] = useState()

    useEffect(() => {
        const SvgWeightCreation = d3
            .select('.score-box')
            .append('svg')
            .attr('width', 250)
            .attr('height', 250)
            .attr('class', 'bg-gray-50')
            .style('border-radius', '5px')

        setSvgWeight(SvgWeightCreation)
    }, [])
    return (
        <div className="score-box rounded-md flex items-center justify-center">
            <div>{console.log(userScore.userScore)} </div>
        </div>
    )
}

export default Score
