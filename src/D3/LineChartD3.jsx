import * as d3 from 'd3';
import { useEffect } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

/**
 * D3.JS LineChart from user datas
 *
 * @param { array } sessions
 * @returns { <LineChartD3 />}
 */

function LineChartD3({ sessions }) {
    useEffect(() => {
        /** CONSTANTS AND LIMITS INITIALISATION */

        let x = d3.scaleLinear().domain([1, 7]).range([0, 250]);

        let y = d3
            .scaleLinear()
            .domain([
                d3.min(sessions, (d) => d.sessionLength) - 5,
                d3.max(sessions, (d) => d.sessionLength),
            ])
            .range([100, 0]);

        /** LINE DRAWING */

        let valueLine = d3
            .line()
            .x(function (d) {
                return x(d.day);
            })
            .y(function (d) {
                return y(d.sessionLength);
            })
            .curve(d3.curveBumpX);

        /** SVG AND PATH DESIGN */

        const svg = d3.select('.session-box');

        const path = svg
            .append('g')
            .attr('transform', 'translate(0, 100)')
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', '#fff')
            .attr('stroke-width', '2px')
            .attr('stroke-dasharray', 250)
            .attr('stroke-dashoffset', 250)
            .attr('d', valueLine(sessions));

        path.transition()
            .duration(600)
            .attr('stroke-dasharray', 0)
            .attr('stroke-dashoffset', 0);

        /** MOUSE OVER ANIMATIONS */

        sessions.map((session, index) => {
            const animations = svg.append('g');
            animations
                .append('circle')
                .attr('id', 'circle' + index)
                .attr('cx', function (d) {
                    return x(session.day);
                })
                .attr('cy', function (d) {
                    return y(session.sessionLength);
                })
                .attr('r', 4)
                .attr('fill', 'white')
                .attr('transform', 'translate(0, 100)')
                .attr('opacity', '0');
            animations
                .append('rect')
                .attr('id', 'infos' + index)
                .attr('height', 25)
                .attr('width', 39)
                .attr('fill', '#fff')
                .attr('x', function (d) {
                    return x(session.day);
                })
                .attr('y', function (d) {
                    return y(session.sessionLength);
                })
                .attr('transform', 'translate(0, 70)')
                .attr('opacity', 0);
            animations
                .append('text')
                .attr('id', 'time' + index)
                .text(session.sessionLength + ' min')
                .attr('font-size', '8')
                .attr('fill', 'black')
                .attr('x', function (d) {
                    return x(session.day);
                })
                .attr('y', function (d) {
                    return y(session.sessionLength);
                })
                .attr('transform', 'translate(7, 85)')
                .attr('opacity', 0);
            animations
                .append('rect')
                .attr('height', 250)
                .attr('width', 250 - index * 41.5)
                .attr('fill', '#000000')
                .attr('x', function (d) {
                    return index * 41.5;
                })
                .attr('opacity', 0)
                .on('mouseover', function () {
                    d3.select(this)
                        .transition()
                        .duration('150')
                        .attr('opacity', '.2');
                    d3.select(`#circle${index}`)
                        .transition()
                        .duration('150')
                        .attr('opacity', '1');
                    d3.select(`#infos${index}`)
                        .transition()
                        .duration('150')
                        .attr('opacity', '1');
                    d3.select(`#time${index}`)
                        .transition()
                        .duration('150')
                        .attr('opacity', '1');
                })
                .on('mouseout', function () {
                    d3.select(this)
                        .transition()
                        .duration('150')
                        .attr('opacity', '0');
                    d3.select(`#circle${index}`)
                        .transition()
                        .duration('150')
                        .attr('opacity', '0');
                    d3.select(`#infos${index}`)
                        .transition()
                        .duration('150')
                        .attr('opacity', '0');
                    d3.select(`#time${index}`)
                        .transition()
                        .duration('150')
                        .attr('opacity', '0');
                });

            // eslint-disable-next-line array-callback-return
            return;
        });
    }, [sessions]);

    return <> </>;
}

export default LineChartD3;

LineChartD3.propTypes = {
    sessions: PropTypes.array,
};
