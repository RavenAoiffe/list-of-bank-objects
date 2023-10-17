import {generarId}  from '../../helpers';
import Bank from './Bank';
const BankList = ({ listOfBank }) => {
    return (
        <>
            {listOfBank.length ? (
                <div className="w-full bg-white shadow mt-5 table-auto transition-opacity">
                    <p className="bg-black text-black text-center py-3"></p>
                    {listOfBank.map(bank => (
                        <Bank
                            key={bank.id=generarId()}
                            bank={bank}
                        />
                    )
                    )}

                </div>
            ) : (
                <p className="text-center mt-10">Wait please...</p>
            )}
        </>
    );
}

export default BankList;
