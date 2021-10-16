import React from 'react'
import { useState, useEffect } from 'react'
import UserSessionsMapper from '../mapper/UserSessionsMapper'

function useFetchSessions(userId) {
    const [errorSessions, setError] = useState(null)
    const [sessionsLoaded, setIsLoaded] = useState(false)
    const [sessionsData, setsessionsData] = useState({})

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then((res) => res.json())
            .then(
                ({ data }) => {
                    console.log(data)
                    setsessionsData(UserSessionsMapper.convertToSession(data))
                    setIsLoaded(true)
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
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
