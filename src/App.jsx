import { useState,useEffect } from 'react'
import Header from './components/Layout/Header';
import Spiner from './components/Layout/Spiner/Spiner';

import BankList from './components/BankList';

const baseURL = `${import.meta.env.VITE_API_URL_PROD}`;

function App() {

  const [listOfBank, setListOfBank] = useState([]);
  const [charge, setCharge] = useState(false);

  const makeAPICall = async () => {

    try {
      
        const response = await fetch(baseURL);
        const data = await response.json();
        const bankList = data.bankList;
        setTimeout( ()=>{
          setCharge(false)
          setListOfBank(bankList)
      },1500)

    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
      makeAPICall()
  }, [])

  const recall = () => {
    setCharge(true)
    makeAPICall()
  }

  return (
    <div className='container mx-auto'>
      <Header>List of Bank Objects</Header>


      <button className='shadow-md bg-white border-black border text-black p-2 rounded-md hover:bg-black hover:text-white text-md mx-3 md:mx-0 w-11/12  md:w-40'
        onClick={recall}
      >Search</button>
        <div>
          {charge ? <Spiner/> :  <BankList 
            listOfBank={ listOfBank}
            />}
           
        </div>
    </div>
  )
}

export default App
