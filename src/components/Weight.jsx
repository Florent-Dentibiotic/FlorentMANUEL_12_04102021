// import * as d3 from 'd3'
// import { useState, useEffect } from 'react'

function Weight({ activitiesData }) {
    // const [SvgWeight, setSvgWeight] = useState()

    // useEffect(() => {
    //     const SvgWeightCreation = d3
    //         .select('.weight-box')
    //         .append('svg')
    //         .attr('width', 825)
    //         .attr('height', 320)
    //         .append('p')
    //         .text('bananas')
    //     setSvgWeight(SvgWeightCreation)
    // }, [])

    return (
        <div className="weight-box">
            {activitiesData[1].calories + ' bananas'}{' '}
        </div>
    )
}

export default Weight
