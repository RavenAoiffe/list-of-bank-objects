const BankList = ({ listOfBank }) => {
    return (
        <>
            {listOfBank.length ? (
                <div className="w-full bg-white shadow mt-5 table-auto">
                    <p className="bg-purple-600 text-white text-center py-3">Banks</p>
                    {listOfBank.map(bank => (
                        <div className="flex md:flex-row flex-col border items-center">
                            <div className="w-32 p-3" >
                                <img src={bank.url}/>
                            </div>
                            <ul className="m-2 py-1">
                                <li className="p-2 ">
                                    <strong> Bank name:</strong> {bank.bankName}</li>
                                <li className="p-2"><strong>Age:</strong> {bank.age}</li>
                                <li className="p-2"><strong>Description:</strong> {bank.description}</li>
                            </ul>
                        </div>
                    )
                    )}

                </div>
            ) : (
                '<p className="text-center mt-10">No hay clientes aún</p>'
            )}
        </>
    );
}

export default BankList;
