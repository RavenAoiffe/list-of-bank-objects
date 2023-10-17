import { useState,useEffect } from 'react'
import Header from './components/Layout/Header';
import Spiner from './components/Layout/Spiner';
import BankList from './components/BankList';

const baseURL = `${import.meta.env.VITE_API_URL_DEV}`;

function App() {

  const [listOfBank, setListOfBank] = useState([]);
  const [charge, setCharge] = useState(false);

  const makeAPICall = async () => {
    try {
      setCharge(true);
      const response = await fetch(baseURL);
      const data = await response.json();
      setListOfBank(data)
      setCharge(false)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <div className='container mx-auto'>
    <Header>List of Bank Objects</Header>
      <div>
        {charge && <Spiner/> }
          <BankList 
          listOfBank={ listOfBank}
          />
      </div>
    </div>
  )
}

export default App
