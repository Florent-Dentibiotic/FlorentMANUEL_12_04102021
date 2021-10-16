import React from 'react'
import { useState, useEffect } from 'react'
import UserActivitiesMapper from '../mapper/UserActivitiesMapper'

function useFetchActivities(userId) {
    const [errorActivities, setError] = useState(null)
    const [activitiesLoaded, setIsLoaded] = useState(false)
    const [activitiesData, setActivitiesData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then((res) => res.json())
            .then(
                ({ data }) => {
                    setActivitiesData(
                        UserActivitiesMapper.convertToActivities(data)
                    )
                    setIsLoaded(true)
                },
                (error) => {
                    setError(error)
                }
            )
    }, [userId])

    if (errorActivities) {
        return <div>Erreur</div>
    } else if (!activitiesLoaded) {
        return <div>Chargement...</div>
    } else {
        return {
            activitiesData,
            activitiesLoaded,
            errorActivities,
        }
    }
}

export default useFetchActivities
