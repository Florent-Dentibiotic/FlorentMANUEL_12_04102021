import useFetch from '../services/UserService';
import { useParams } from 'react-router';
import RadialBarChartD3 from '../D3/RadialBarChartD3';

/**
 * Setting up RadialBarChart framework and  initialising D3 if data loaded
 *
 * @return { RadarChart }
 */

function RadialBarChart(data) {
    const { id } = useParams();
    const { userData, isLoaded, error } = useFetch(id);

    return (
        <>
            <svg
                className="score-box rounded bg-gray-50"
                width="250"
                height="250"
                viewBox="0 0 250 250"
            >
                <circle cx="125" cy="125" r="87" fill="white"></circle>
                <text x="32" y="35" fill="#20253A" fontSize="15">
                    Score
                </text>
                <text
                    x="109"
                    y="100"
                    fill="#20253A"
                    fontSize="19"
                    fontWeight="bold"
                >
                    {isLoaded && userData.score * 100}%
                </text>
                <text
                    x="102"
                    y="130"
                    fill="#20253A"
                    fontSize="16"
                    className="opacity-50"
                >
                    de votre
                </text>
                <text
                    x="105"
                    y="160"
                    fill="#20253A"
                    fontSize="16"
                    className="opacity-50"
                >
                    objectif
                </text>
                {!error & isLoaded && (
                    <RadialBarChartD3 score={userData.score} />
                )}
            </svg>
        </>
    );
}

export default RadialBarChart;
