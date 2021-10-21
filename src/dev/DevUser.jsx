import { useParams } from 'react-router'
import useFetch from '../services/UserService'

function DevTodayScore() {
    const { id } = useParams()
    const { userData, isLoaded } = useFetch(id)
    return (
        <>
            <main className="h-screen flex flex-col justify-start items-center p-10">
                <div className="w-1/4 h-1/3 mt-32 border-black border-solid border-4 p-10 flex flex-col justify-around items-center rounded-lg">
                    <p>First Name : {isLoaded && userData.firstName}</p>
                    <p>Last Name : {isLoaded && userData.lastName}</p>
                    <p>Age : {isLoaded && userData.age}</p>
                    <p>Score : {isLoaded && userData.score}</p>
                    <p>User Id : {isLoaded && userData.userId}</p>
                </div>
            </main>
        </>
    )
}

export default DevTodayScore
