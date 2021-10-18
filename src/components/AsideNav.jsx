import '../index.css'
import yoga from '../assets/yoga.png'
import swim from '../assets/swim.png'
import bike from '../assets/bike.png'
import dumbbell from '../assets/dumbbell.png'

function AsideNav() {
    return (
        <>
            <aside className="w-20 bg-black">
                <div className="h-4/5 flex flex-col items-center justify-around">
                    <ul className="mt-12 h-96">
                        <li>
                            <img src={yoga} alt="yoga" className="my-6" />
                        </li>
                        <li>
                            <img src={swim} alt="swim" className="my-6" />
                        </li>
                        <li>
                            <img src={bike} alt="bike" className="my-6" />
                        </li>
                        <li>
                            <img
                                src={dumbbell}
                                alt="dumbbell"
                                className="my-6"
                            />
                        </li>
                    </ul>
                    <p className="text-white transform -rotate-90 whitespace-nowrap text-sm mt-28">
                        Copiryght, SportSee 2020
                    </p>
                </div>
            </aside>
        </>
    )
}

export default AsideNav
