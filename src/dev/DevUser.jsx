import { useParams } from 'react-router'
import useFetch from '../services/UserService'

function DevTodayScore() {
    const { id } = useParams()
    const { userData, isLoaded } = useFetch(id)
    return (
        <>
            <main className="h-screen flex flex-col justify-start items-center p-10">
                <p>{isLoaded && console.log(userData)}</p>
            </main>
        </>
    )
}

export default DevTodayScore
