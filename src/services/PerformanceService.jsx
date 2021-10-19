import React from 'react'
import { useState, useEffect } from 'react'
import UserPerformanceMapper from '../mapper/UserPerformanceMapper'

/**
 * Custom Hook to Fetch Performance Data
 * @param { number } id
 * @return { Performances }
 */

function useFetchPerf(id) {
    const [errorPerf, setError] = useState(null)
    const [performanceLoaded, setIsLoaded] = useState(false)
    const [performanceData, setPerformanceData] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:3000/user/${id}/performance`)
    //         //** MOCK LINK **
    //         //fetch(`../user/${id}/performance.json`)
    //         .then((res) => res.json())
    //         .then(
    //             ({ data }) => {
    //                 setPerformanceData(
    //                     UserPerformanceMapper.convertToUserPerf(data)
    //                 )
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
                    `http://localhost:3000/user/${id}/performance`
                )
                const { data } = await response.json()
                setPerformanceData(
                    UserPerformanceMapper.convertToUserPerf(data)
                )
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setIsLoaded(true)
            }
        }
        fetchUser()
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
