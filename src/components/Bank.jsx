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
                        <li className="p-2 text-2xl">
                        <strong>{bankName}</strong>
                        </li>
                        <li className="py-0 px-2"> {description}</li>
                        <li className="p-2">Age: {age}</li>
                    </ul>
                </div>
</div>
    );
}

export default Bank;
