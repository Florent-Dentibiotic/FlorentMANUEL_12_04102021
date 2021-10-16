import '../index.css'
import AsideNav from '../components/AsideNav'
import Weight from '../components/Weight'
import KeyData from '../components/KeyData'
import SessionDuration from '../components/SessionDuration'
import Score from '../components/Score'
import Radar from '../components/Radar'
import Error from '../components/Error'
import useFetch from '../services/UserService'
import useFetchPerf from '../services/PerformanceService'
import useFetchActivities from '../services/ActivitiesService'
import useFetchSessions from '../services/SessionsService'
import { useParams } from 'react-router'

function UserInterface() {
    const { userId } = useParams()
    const { userData, keyData, isLoaded, error } = useFetch(userId.slice(-2))
    const { performanceData, performanceLoaded, errorPerf } = useFetchPerf(
        userId.slice(-2)
    )
    const { activitiesData, activitiesLoaded, errorActivities } =
        useFetchActivities(userId.slice(-2))
    const { sessionsData, sessionsLoaded, errorSessions } = useFetchSessions(
        userId.slice(-2)
    )
    sessionsLoaded && console.log(sessionsData)

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
                                    {isLoaded ? (
                                        userData.firstName
                                    ) : (
                                        <p>I'm Loading</p>
                                    )}
                                </span>
                            </h1>
                            <h2 className="mb-5">
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </h2>
                        </div>
                        <div className="grid grid-cols-4 gap-3 h-5/6">
                            {activitiesLoaded ? (
                                <Weight
                                    activitiesData={activitiesData.userSessions}
                                />
                            ) : (
                                <p>I'm Loading</p>
                            )}
                            <div className="rounded-md row-span-2 grid grid-row-4 gap-3">
                                {isLoaded ? (
                                    <KeyData keyData={keyData} />
                                ) : (
                                    <p>I'm Loading</p>
                                )}
                            </div>
                            {sessionsLoaded ? (
                                <SessionDuration
                                    sessionData={sessionsData.sessions}
                                />
                            ) : (
                                <p>I'm Loading</p>
                            )}

                            {performanceLoaded ? (
                                <Radar
                                    userPerformanceData={performanceData.perfs}
                                />
                            ) : (
                                <p>I'm Loading</p>
                            )}
                            {isLoaded ? (
                                <Score userScore={userData.score} />
                            ) : (
                                <p>I'm Loading</p>
                            )}
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default UserInterface
