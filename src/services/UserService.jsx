import { useState, useEffect } from 'react'
import UserMapper from '../mapper/UserMapper'
import UserKeyDataMapper from '../mapper/UserKeyDataMapper'

/**
 * Custom Hook to Fetch User & Key Data
 *
 * @param { number } id
 * @return { UserData, KeyData, isLoaded, error }
 */

function useFetch(id) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [userData, setUserData] = useState({})
    const [keyData, setKeyData] = useState({})

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}`)
                // //** MOCK LINK **
                // const response = await fetch(`../${id}/user.json`)
                const { data } = await response.json()
                setUserData(UserMapper.convertToUser(data))
                setKeyData(UserKeyDataMapper.convertToKeyData(data))
            } catch (err) {
                setError(err)
                console.log(err)
            } finally {
                setIsLoaded(true)
            }
        }
        fetchUser()
    }, [id])

    return {
        userData,
        keyData,
        isLoaded,
        error,
    }
}

export default useFetch
