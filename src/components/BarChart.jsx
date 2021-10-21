import useFetchActivities from '../services/ActivityService'
import { useParams } from 'react-router'
import BarChartD3 from '../D3/BarChartD3'

/**
 * Setting up BarChart framework and initialising D3 if data loaded
 *
 * @return { BarChart }
 */

function BarChart() {
    const { id } = useParams()
    const { activitiesData, activitiesLoaded, errorActivities } =
        useFetchActivities(id)

    return (
        <>
            <svg
                className="bg-gray-50 rounded"
                width="825"
                height="320"
                viewBox="0 0 825 320"
            >
                <text x="32" y="50" fill="#20253A" fontSize="15">
                    Activité quotidienne
                </text>
                <circle cx="520" cy="44" r="4" fill="#20253A" />
                <text x="535" y="50" fill="#20253A" fontSize="15">
                    Poids (kg)
                </text>
                <circle cx="620" cy="44" r="4" fill="#E60000" />
                <text x="635" y="50" fill="#20253A" fontSize="15">
                    Calories Brulées (kCal)
                </text>
                {!errorActivities & activitiesLoaded && (
                    <BarChartD3 data={activitiesData.userSessions} />
                )}
            </svg>
        </>
    )
}

export default BarChart
