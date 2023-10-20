import React from 'react';

const Bank = ({bank, darkMode}) => {

    const {bankName,age,description} = bank;
    return (
        <div>
            <div className={darkMode ? "text-neutral-400 flex md:flex-row flex-col border items-center" :"text-black flex md:flex-row flex-col border items-center" }>
                    <div className="w-32 p-3" >
                        <img src={bank.url}/>
                    </div>
                    <ul className="m-2 py-1">
                        <li className="p-2 ">
                            <strong> Bank name:</strong> {bankName}</li>
                        <li className="p-2"><strong>Age:</strong> {age}</li>
                        <li className="p-2"><strong>Description:</strong> {description}</li>
                    </ul>
                </div>
</div>
    );
}

export default Bank;
