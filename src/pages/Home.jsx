import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../index.css'

function Home() {
    const [user, setUser] = useState('')

    return (
        <>
            <Header />
            <main className="h-screen flex justify-center">
                <form className="h-1/3 mt-32 bg-black p-10 flex flex-col justify-around items-center rounded-lg">
                    <label className="text-white">Nom d'utilisateur :</label>
                    <input
                        type="text"
                        name="userId"
                        className="px-3 py-1"
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Link
                        to={`/user/${user}`}
                        className="text-black bg-white px-3 py-1 rounded-sm"
                    >
                        Envoyer
                    </Link>
                </form>
            </main>
        </>
    )
}

export default Home
