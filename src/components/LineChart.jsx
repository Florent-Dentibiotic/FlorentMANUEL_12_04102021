import LineChartD3 from '../D3/LineChartD3';
import useFetchSessions from '../services/SessionsService';
import { useParams } from 'react-router';

/**
 * Setting up LineChart framework and  initialising D3 if data loaded
 *
 * @return { LineChart }
 */

function LineChart() {
    const { id } = useParams();
    const { sessionsData, sessionsLoaded, errorSessions } =
        useFetchSessions(id);

    return (
        <>
            <svg
                className="session-box bg-red-600 rounded"
                width="250"
                height="250"
                viewBox="0 0 250 250"
            >
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
                {!errorSessions & sessionsLoaded && (
                    <LineChartD3 sessions={sessionsData.sessions} />
                )}
            </svg>
        </>
    );
}

export default LineChart;
