import React from 'react'
import { useState, useEffect } from 'react'
import UserPerformanceMapper from '../mapper/UserPerformanceMapper'

function useFetchPerf(id) {
    const [errorPerf, setError] = useState(null)
    const [performanceLoaded, setIsLoaded] = useState(false)
    const [performanceData, setPerformanceData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}/performance`)
            //** MOCK LINK **
            //fetch(`../user/${id}/performance.json`)
            .then((res) => res.json())
            .then(
                ({ data }) => {
                    setPerformanceData(
                        UserPerformanceMapper.convertToUserPerf(data)
                    )
                    setIsLoaded(true)
                },
                (error) => {
                    setError(error)
                }
            )
    }, [id])

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
