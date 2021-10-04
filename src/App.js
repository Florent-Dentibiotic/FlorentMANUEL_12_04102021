import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch(`http://localhost:3000/user/18/activity`).then((response) =>
    //         response
    //             .json()
    //             .then(({ data }) => {
    //                 console.log(data)
    //                 setSurveyData(data)
    //                 setDataLoading(false)
    //             })
    //             .catch((error) => console.log(error))
    //     )
    // }, [])

    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            try {
                const response = await fetch(
                    `http://localhost:3000/user/18/activity`
                )
                const { data } = await response.json()
                setSurveyData(data)
            } catch (err) {
                console.log('===== error =====', err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {isDataLoading ? (
                    <p>I'm Loading</p>
                ) : (
                    <p>{surveyData.userId}</p>
                )}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
