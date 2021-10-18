import React from 'react'
import { useState, useEffect } from 'react'
import UserSessionsMapper from '../mapper/UserSessionsMapper'

function useFetchSessions(userId) {
    const [errorSessions, setError] = useState(null)
    const [sessionsLoaded, setIsLoaded] = useState(false)
    const [sessionsData, setsessionsData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then((res) => res.json())
            .then(
                ({ data }) => {
                    setsessionsData(UserSessionsMapper.convertToSession(data))
                    setIsLoaded(true)
                },
                (error) => {
                    setError(error)
                }
            )
    }, [userId])

    if (errorSessions) {
        return <div>Erreur</div>
    } else if (!sessionsLoaded) {
        return <div>Chargement...</div>
    } else {
        return {
            sessionsData,
            sessionsLoaded,
            errorSessions,
        }
    }
}

export default useFetchSessions
