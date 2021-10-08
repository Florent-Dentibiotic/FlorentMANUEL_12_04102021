import AsideNav from '../components/AsideNav'
import Header from '../components/Header'
import '../index.css'
import calories from '../imgs/calories-icon.png'
import protein from '../imgs/protein-icon.png'
import carbs from '../imgs/carbs-icon.png'
import fat from '../imgs/fat-icon.png'

function UserInterface(props) {
    return (
        <>
            <Header />
            <main className="flex h-screen">
                <AsideNav />
                <div className="w-full h-full px-28 py-8">
                    <div>
                        <h1 className="text-5xl mb-5">
                            Bonjour{' '}
                            <span className="text-red-600">
                                {props.match.params.userId && 'Thomas'}
                            </span>
                        </h1>
                        <h2 className="mb-5">
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 gap-3 h-5/6">
                        <div className="bg-gray-100 rounded-md col-span-3">
                            {props.match.params.userId}
                        </div>
                        <div className="rounded-md row-span-2 grid grid-row-4 gap-3">
                            <div className="bg-gray-100 rounded-md flex justify-around items-center">
                                <img
                                    src={calories}
                                    alt="calories"
                                    className="w-20"
                                />
                                <div className="w-32">
                                    <p className="text-xl font-bold">123kCal</p>
                                    <p className="text-gray-500">Calories</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-md flex items-center justify-around">
                                <img
                                    src={protein}
                                    alt="protein"
                                    className="w-20"
                                />
                                <div className="w-32">
                                    <p className="text-xl font-bold">123g</p>
                                    <p className="text-gray-500">Protéines</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-md flex items-center justify-around">
                                <img src={carbs} alt="apple" className="w-20" />
                                <div className="w-32">
                                    <p className="text-xl font-bold">123g</p>
                                    <p className="text-gray-500">Glucides</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-md flex items-center justify-around">
                                <img
                                    src={fat}
                                    alt="hamburger"
                                    className="w-20"
                                />
                                <div className="w-32">
                                    <p className="text-xl font-bold">123g</p>
                                    <p className="text-gray-500">Lipides</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-md"></div>
                        <div className="bg-gray-100 rounded-md"></div>
                        <div className="bg-gray-100 rounded-md"></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserInterface
