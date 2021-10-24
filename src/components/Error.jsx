import { Link } from 'react-router-dom';

function Error({ detail }) {
    return (
        <>
            <div className="w-full h-full px-28 py-8 text-center">
                <h2 className="text-9xl my-16">404</h2>
                <h3 className="text-xl my-10">
                    {detail
                        ? detail
                        : "Oups ! La page que vous demandez n'existe pas."}
                </h3>
                <Link className="underline" to="/">
                    Retournez sur la page d'accueil
                </Link>
            </div>
        </>
    );
}

export default Error;
