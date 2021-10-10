import AsideNav from '../components/AsideNav'
import Header from '../components/Header'
import '../index.css'
import Weight from '../components/Weight'
import { useState, useEffect } from 'react'
import KeyData from '../components/KeyData'
import SessionDuration from '../components/SessionDuration'
import Score from '../components/Score'
import Radar from '../components/Radar'

function UserInterface(props) {
    const [userData, setUserData] = useState({})
    const [activitiesData, setActivitiesData] = useState({})
    const [sessionData, setSessionData] = useState({})
    const [performanceData, setPerformanceData] = useState({})
    const [isDataLoading, setDataLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchActivities() {
            setDataLoading(true)
            try {
                const response = await fetch(
                    `http://localhost:3000/user/${props.match.params.userId.slice(
                        -2
                    )}`
                )
                const { data } = await response.json()
                setUserData(data)

                const activitiesResponse = await fetch(
                    `http://localhost:3000/user/${props.match.params.userId.slice(
                        -2
                    )}/activity`
                )
                const activitiesData = await activitiesResponse.json()
                setActivitiesData(activitiesData.data)

                const sessionResponse = await fetch(
                    `http://localhost:3000/user/${props.match.params.userId.slice(
                        -2
                    )}/average-sessions`
                )
                const sessionData = await sessionResponse.json()
                setSessionData(sessionData.data)

                const performanceResponse = await fetch(
                    `http://localhost:3000/user/${props.match.params.userId.slice(
                        -2
                    )}/performance`
                )
                const performanceData = await performanceResponse.json()
                setPerformanceData(performanceData.data)
            } catch (err) {
                console.log('===== error =====', err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchActivities()
    }, [props.match.params.userId])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <>
            <Header />
            <main className="flex h-screen">
                <AsideNav />
                <div className="w-full h-full px-28 py-8">
                    <div>
                        <h1 className="text-5xl mb-5">
                            Bonjour{' '}
                            <span className="text-red-600">
                                {isDataLoading ? (
                                    <p>I'm Loading</p>
                                ) : (
                                    userData.userInfos.firstName
                                )}
                            </span>
                        </h1>
                        <h2 className="mb-5">
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 gap-3 h-5/6">
                        {isDataLoading ? (
                            <p>I'm Loading</p>
                        ) : (
                            <Weight activitiesData={activitiesData.sessions} />
                        )}
                        <div className="rounded-md row-span-2 grid grid-row-4 gap-3">
                            {isDataLoading ? (
                                <p>I'm Loading</p>
                            ) : (
                                <KeyData userKeyData={userData.keyData} />
                            )}
                        </div>
                        {isDataLoading ? (
                            <p>I'm Loading</p>
                        ) : (
                            <SessionDuration
                                sessionData={sessionData.sessions}
                            />
                        )}
                        <div className="bg-gray-100 rounded-md">
                            {isDataLoading ? (
                                <p>I'm Loading</p>
                            ) : (
                                <Radar radarData={performanceData} />
                            )}
                        </div>
                        <div className="bg-gray-100 rounded-md">
                            {isDataLoading ? (
                                <p>I'm Loading</p>
                            ) : (
                                <Score userScore={userData.todayScore} />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserInterface
