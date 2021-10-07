import '../index.css'
import logo from '../imgs/logo-2.png'

function Header() {
    return (
        <nav className="bg-black h-20 m-auto">
            <ul className="h-16 text-white flex align-middle justify-between m-auto text-lg">
                <li>
                    <img src={logo} alt="SportSee" className="max-h-16" />
                </li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}

export default Header
