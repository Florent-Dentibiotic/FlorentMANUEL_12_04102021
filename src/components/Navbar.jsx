import '../index.css'
import logo from '../imgs/logo-2.png'

function Navbar() {
    return (
        <>
            <nav className="bg-black h-20 flex align-middle w-full pl-5 pr-32">
                <ul className="w-full h-16 text-white flex items-center justify-between m-auto text-lg">
                    <li>
                        <img src={logo} alt="SportSee" className="max-h-16" />
                    </li>
                    <li className="align-middle">Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
