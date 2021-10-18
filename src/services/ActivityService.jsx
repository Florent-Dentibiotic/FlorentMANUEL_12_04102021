import React from 'react'
import { useState, useEffect } from 'react'
import UserActivitiesMapper from '../mapper/UserActivitiesMapper'

function useFetchActivities(id) {
    const [errorActivities, setError] = useState(null)
    const [activitiesLoaded, setIsLoaded] = useState(false)
    const [activitiesData, setActivitiesData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}/activity`)
            //** MOCK LINK **
            //fetch(`../user/${id}/activity.json`)
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
    }, [id])

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
