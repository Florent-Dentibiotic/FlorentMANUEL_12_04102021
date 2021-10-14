import React from 'react'
//import UserMapper from '../mapper/UserMapper'
import { useState, useEffect } from 'react'

function UserService(url) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setItems(data)
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [url])

    if (error) {
        return <div>Erreur : {error.message}</div>
    } else if (!isLoaded) {
        return <div>Chargement...</div>
    } else {
        return console.log(items)
    }
}

export default UserService
