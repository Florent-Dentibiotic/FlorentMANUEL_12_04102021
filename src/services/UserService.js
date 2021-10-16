import React from 'react'
import { useState, useEffect } from 'react'
import UserMapper from '../mapper/UserMapper'
import UserKeyDataMapper from '../mapper/UserKeyDataMapper'

function useFetch(userId) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [userData, setUserData] = useState({})
    const [keyData, setKeyData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then((res) => res.json())
            .then(
                ({ data }) => {
                    //console.log(data)
                    setUserData(UserMapper.convertToUser(data))
                    setKeyData(UserKeyDataMapper.convertToKeyData(data))
                    setIsLoaded(true)
                },
                (error) => {
                    setError(error)
                }
            )
    }, [userId])

    if (error) {
        return <div>Erreur</div>
    } else if (!isLoaded) {
        return <div>Chargement...</div>
    } else {
        return {
            userData,
            keyData,
            isLoaded,
            error,
        }
    }
}

export default useFetch
