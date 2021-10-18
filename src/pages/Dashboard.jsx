import '../index.css'
import AsideNav from '../components/AsideNav'
import BarChart from '../components/BarChart'
import KeyData from '../components/KeyData'
import LineChart from '../components/LineChart'
import RadialBarChart from '../components/RadialBarChart'
import RadarChart from '../components/RadarChart'
import Error from '../components/Error'
import useFetch from '../services/UserService'
import useFetchPerf from '../services/PerformanceService'
import useFetchActivities from '../services/ActivityService'
import useFetchSessions from '../services/SessionsService'
import { useParams } from 'react-router'

function Dashboard() {
    const { userId } = useParams()
    const { userData, isLoaded, error } = useFetch(userId.slice(-2))
    const { performanceData, performanceLoaded, errorPerf } = useFetchPerf(
        userId.slice(-2)
    )
    const { activitiesData, activitiesLoaded, errorActivities } =
        useFetchActivities(userId.slice(-2))
    const { sessionsData, sessionsLoaded, errorSessions } = useFetchSessions(
        userId.slice(-2)
    )

    if (error || errorActivities || errorPerf || errorSessions) {
        return <Error />
    } else {
        return (
            <>
                <main className="flex h-screen">
                    <AsideNav />
                    <div className="w-full h-full px-28 py-8">
                        <div>
                            <h1 className="text-5xl mb-5">
                                Bonjour{' '}
                                <span className="text-red-600">
                                    {isLoaded && userData.firstName}
                                </span>
                            </h1>
                            {isLoaded && (
                                <h2 className="mb-5">
                                    Félicitation ! Vous avez explosé vos
                                    objectifs hier 👏
                                </h2>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-3 h-5/6">
                            <div className="bg-gray-50 rounded-md col-span-3 flex items-center justify-center">
                                {activitiesLoaded ? (
                                    <BarChart
                                        activitiesData={
                                            activitiesData.userSessions
                                        }
                                    />
                                ) : (
                                    <p>I'm Loading</p>
                                )}
                            </div>
                            <div className="rounded-md row-span-2 grid grid-row-4 gap-3">
                                {isLoaded ? (
                                    <KeyData />
                                ) : (
                                    <div className="rounded-md bg-gray-50 flex justify-center items-center">
                                        I'm Loading
                                    </div>
                                )}
                            </div>
                            <div className="relative rounded-md flex justify-center items-center bg-red-600">
                                {sessionsLoaded ? (
                                    <LineChart
                                        sessionData={sessionsData.sessions}
                                    />
                                ) : (
                                    <p>I'm Loading</p>
                                )}
                            </div>
                            <div className="text-white rounded-md flex items-center justify-center bg-black">
                                {performanceLoaded ? (
                                    <RadarChart
                                        userPerformanceData={
                                            performanceData.perfs
                                        }
                                    />
                                ) : (
                                    <p>I'm Loading</p>
                                )}
                            </div>
                            <div className="rounded-md flex items-center justify-center bg-gray-50">
                                {isLoaded ? (
                                    <RadialBarChart
                                        userScore={userData.score}
                                    />
                                ) : (
                                    <p>I'm Loading</p>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Dashboard
