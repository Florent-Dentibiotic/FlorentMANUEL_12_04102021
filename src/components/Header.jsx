import '../index.css'
import logo from '../imgs/logo-2.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="bg-black h-20 flex items-center w-full pl-5 pr-32">
                <ul className="w-full h-16 text-white flex items-center justify-between m-auto text-lg">
                    <li>
                        <img src={logo} alt="SportSee" className="max-h-16" />
                    </li>
                    <li className="align-middle">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </header>
        </>
    )
}

export default Header
