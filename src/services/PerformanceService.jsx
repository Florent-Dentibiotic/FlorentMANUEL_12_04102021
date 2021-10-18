import React from 'react'
import { useState, useEffect } from 'react'
import UserPerformanceMapper from '../mapper/UserPerformanceMapper'

function useFetchPerf(userId) {
    const [errorPerf, setError] = useState(null)
    const [performanceLoaded, setIsLoaded] = useState(false)
    const [performanceData, setPerformanceData] = useState({})

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then((res) => res.json())
            .then(
                ({ data }) => {
                    setPerformanceData(
                        UserPerformanceMapper.convertToUserPerf(data)
                    )
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

    if (errorPerf) {
        return <div>Erreur</div>
    } else if (!performanceLoaded) {
        return <div>Chargement...</div>
    } else {
        return {
            performanceData,
            performanceLoaded,
            errorPerf,
        }
    }
}

export default useFetchPerf
