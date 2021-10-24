import '../index.css';
import AsideNav from '../components/AsideNav';
import BarChart from '../components/BarChart';
import KeyData from '../components/KeyData';
import LineChart from '../components/LineChart';
import RadialBarChart from '../components/RadialBarChart';
import RadarChart from '../components/RadarChart';
import Error from '../components/Error';
import useFetch from '../services/UserService';
import { useParams } from 'react-router';

function Dashboard() {
    const { id } = useParams();
    const { userData, isLoaded, error } = useFetch(id);

    if (error) {
        return (
            <>
                <main className="flex h-screen">
                    <AsideNav />
                    <Error
                        detail={
                            'Utilisateur inconnu, merci de vous identifier pour afficher vos statistiques.'
                        }
                    />
                </main>
            </>
        );
    } else {
        return (
            <>
                <main className="flex h-screen">
                    <AsideNav />
                    <div className="w-full h-full px-28 py-8">
                        <div>
                            <h1 className="text-5xl mb-5">
                                Bonjour{' '}
                                <span className="text-red-600">
                                    {isLoaded && userData.firstName}{' '}
                                </span>
                            </h1>
                            {isLoaded && (
                                <h2 className="mb-5">
                                    Félicitation ! Vous avez explosé vos
                                    objectifs hier 👏
                                </h2>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-3 h-5/6">
                            <div className="rounded-md col-span-3 flex items-center justify-center">
                                <BarChart />
                            </div>
                            <div className="rounded-md row-span-2 grid grid-row-4 gap-3">
                                <KeyData />
                            </div>
                            <div className="relative rounded-md flex justify-center items-center">
                                <LineChart />
                            </div>
                            <div className="text-white rounded-md flex items-center justify-center">
                                <RadarChart />
                            </div>
                            <div className="rounded-md flex items-center justify-center">
                                <RadialBarChart />
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Dashboard;
