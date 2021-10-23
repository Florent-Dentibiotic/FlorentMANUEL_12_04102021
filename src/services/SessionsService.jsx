import { useState, useEffect } from 'react'
import UserSessionsMapper from '../mapper/UserSessionsMapper'

/**
 * Custom Hook to Fetch Sessions Duration Data
 *
 * @param { number } id
 * @return { SessionsDuration, sessionsLoaded, errorSessions }
 */

function useFetchSessions(id) {
    const [errorSessions, setError] = useState(null)
    const [sessionsLoaded, setIsLoaded] = useState(false)
    const [sessionsData, setsessionsData] = useState({})

    useEffect(() => {
        async function fetchUser() {
            try {
                // const response = await fetch(
                //     `http://localhost:3000/user/${id}/average-sessions`
                // )
                //** MOCK LINK **
                const response = await fetch(`../${id}/average-sessions.json`)
                const { data } = await response.json()
                setsessionsData(UserSessionsMapper.convertToSession(data))
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setIsLoaded(true)
            }
        }
        fetchUser()
    }, [id])

    return {
        sessionsData,
        sessionsLoaded,
        errorSessions,
    }
}

export default useFetchSessions
