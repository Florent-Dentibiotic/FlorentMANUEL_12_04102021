import KeyData from '../components/KeyData';

function DevKeyData() {
    return (
        <>
            <main className="h-screen flex justify-center p-10">
                <div className="rounded-md grid grid-cols-4 gap-3 w-full h-40">
                    <KeyData />
                </div>
            </main>
        </>
    );
}

export default DevKeyData;
