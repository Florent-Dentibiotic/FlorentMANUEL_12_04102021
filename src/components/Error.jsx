import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <div>
                <h2>404</h2>
                <h3>Oups ! La page que vous demandez n'existe pas.</h3>
                <Link to="/">Retournez sur la page d'accueil</Link>
            </div>
        </>
    )
}

export default Error
