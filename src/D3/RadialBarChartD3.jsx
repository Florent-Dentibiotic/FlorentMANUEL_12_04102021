import * as d3 from 'd3'
import { useEffect } from 'react/cjs/react.development'
import PropTypes from 'prop-types'

function RadialBarChartD3({ score }) {
    useEffect(() => {
        const svg = d3.select('.score-box')

        const arc = d3
            .arc()
            .innerRadius(82)
            .outerRadius(92)
            .startAngle(0)
            .endAngle(-Math.PI * 2 * score)
            .cornerRadius(5)

        svg.append('path')
            .attr('class', 'arc')
            .attr('fill', 'red')
            .attr('transform', 'translate(125, 125)')
            .attr('d', arc)
            .transition()
            .duration(600)
    }, [score])

    return <> </>
}

export default RadialBarChartD3

RadialBarChartD3.propTypes = {
    perfs: PropTypes.number,
}
