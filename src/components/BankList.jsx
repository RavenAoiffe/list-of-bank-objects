import {generarId}  from '../../helpers';
import Bank from './Bank';
const BankList = ({ listOfBank, darkMode}) => {
    return (
        <>
            {listOfBank.length ? (
                <div className={darkMode? "w-10/12 my-4 mx-auto bg-neutral-900 shadow mt-5 table-auto transition-opacity border":"border mx-auto w-10/12 my-4 bg-white shadow mt-5 table-auto transition-opacity"}>
                    <p className={darkMode? 'bg-white text-black text-center font-bold py-2 uppercase' : 'text-white bg-gray-900 text-center font-bold py-2 uppercase'}>List of Banks Objects</p>
                    {listOfBank.map(bank => (
                        <Bank
                            key={bank.id=generarId()}
                            bank={bank}
                            darkMode={darkMode}
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
