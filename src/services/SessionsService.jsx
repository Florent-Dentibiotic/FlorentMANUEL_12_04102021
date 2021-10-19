import React from 'react'
import { useState, useEffect } from 'react'
import UserSessionsMapper from '../mapper/UserSessionsMapper'

/**
 * Custom Hook to Fetch Sessions Duration Data
 * @param { number } id
 * @return { SessionsDuration }
 */

function useFetchSessions(id) {
    const [errorSessions, setError] = useState(null)
    const [sessionsLoaded, setIsLoaded] = useState(false)
    const [sessionsData, setsessionsData] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:3000/user/${id}/average-sessions`)
    //         //** MOCK LINK **
    //         //fetch(`../user/${id}/average-sessions.json`)
    //         .then((res) => res.json())
    //         .then(
    //             ({ data }) => {
    //                 setsessionsData(UserSessionsMapper.convertToSession(data))
    //                 setIsLoaded(true)
    //             },
    //             (error) => {
    //                 setError(error)
    //             }
    //         )
    // }, [id])

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(
                    `http://localhost:3000/user/${id}/average-sessions`
                )
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
