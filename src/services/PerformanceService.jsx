import { useState, useEffect } from 'react'
import UserPerformanceMapper from '../mapper/UserPerformanceMapper'

/**
 * Custom Hook to Fetch Performance Data
 *
 * @param { number } id
 * @return { Performances, performanceLoaded, errorPerf }
 */

function useFetchPerf(id) {
    const [errorPerf, setError] = useState(null)
    const [performanceLoaded, setIsLoaded] = useState(false)
    const [performanceData, setPerformanceData] = useState({})

    useEffect(() => {
        async function fetchUser() {
            try {
                // const response = await fetch(
                //     `http://localhost:3000/user/${id}/performance`
                // )
                //** MOCK LINK **
                const response = await fetch(`../${id}/performance.json`)
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

    return {
        performanceData,
        performanceLoaded,
        errorPerf,
    }
}

export default useFetchPerf
