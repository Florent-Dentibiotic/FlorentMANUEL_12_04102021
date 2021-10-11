import calories from '../imgs/calories-icon.png'
import protein from '../imgs/protein-icon.png'
import carbs from '../imgs/carbs-icon.png'
import fat from '../imgs/fat-icon.png'

function KeyData(userKeyData) {
    return (
        <>
            <div className="bg-gray-50 rounded-md flex justify-around items-center">
                <img src={calories} alt="calories" className="w-20" />
                <div className="w-32">
                    <p className="text-xl font-bold">
                        {userKeyData && userKeyData.userKeyData.calorieCount}
                        kCal
                    </p>
                    <p className="text-gray-500">Calories</p>
                </div>
            </div>
            <div className="bg-gray-50 rounded-md flex items-center justify-around">
                <img src={protein} alt="protein" className="w-20" />
                <div className="w-32">
                    <p className="text-xl font-bold">
                        {userKeyData && userKeyData.userKeyData.proteinCount} g
                    </p>
                    <p className="text-gray-500">Protéines</p>
                </div>
            </div>
            <div className="bg-gray-50 rounded-md flex items-center justify-around">
                <img src={carbs} alt="apple" className="w-20" />
                <div className="w-32">
                    <p className="text-xl font-bold">
                        {userKeyData &&
                            userKeyData.userKeyData.carbohydrateCount}
                        g
                    </p>
                    <p className="text-gray-500">Glucides</p>
                </div>
            </div>
            <div className="bg-gray-50 rounded-md flex items-center justify-around">
                <img src={fat} alt="hamburger" className="w-20" />
                <div className="w-32">
                    <p className="text-xl font-bold">
                        {userKeyData && userKeyData.userKeyData.lipidCount} g
                    </p>
                    <p className="text-gray-500">Lipides</p>
                </div>
            </div>
        </>
    )
}

export default KeyData
