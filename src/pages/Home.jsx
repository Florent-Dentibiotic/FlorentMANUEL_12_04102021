import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../index.css'

function Home() {
    const [user, setUser] = useState('')
    const [toDashboard, setToDashboard] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setToDashboard(true)
    }

    return (
        <>
            <main className="h-screen flex justify-center">
                <form
                    className="h-1/3 mt-32 bg-black p-10 flex flex-col justify-around items-center rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <label className="text-white">Nom d'utilisateur :</label>
                    <input
                        type="text"
                        name="userId"
                        className="px-3 py-1"
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="user12"
                    />
                    <button
                        type="submit"
                        className="text-black bg-white px-3 py-1 rounded-sm"
                    >
                        Envoyer
                    </button>
                    {toDashboard ? (
                        <Redirect to={`/user/${user.slice(-2)}/dashboard`} />
                    ) : null}
                </form>
            </main>
        </>
    )
}

export default Home
