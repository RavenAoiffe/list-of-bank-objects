import {generarId}  from '../../helpers';
import Bank from './Bank';
const BankList = ({ listOfBank }) => {
    return (
        <>
            {listOfBank.length ? (
                <div className="w-full bg-white shadow mt-5 table-auto transition-opacity">
                    <p className="bg-purple-600 text-white text-center py-3">Banks</p>
                    {listOfBank.map(bank => (
                        <Bank
                            key={bank.id=generarId()}
                            bank={bank}
                        />
                    )
                    )}

                </div>
            ) : (
                <p className="text-center mt-10">Cargando...</p>
            )}
        </>
    );
}

export default BankList;
