import { useState,useEffect } from 'react'
import Header from './components/Layout/Header';
import Spiner from './components/Layout/Spiner/Spiner';
import BankList from './components/BankList';

const baseURL = `${import.meta.env.VITE_API_URL_DEV}`;

function App() {

  const [listOfBank, setListOfBank] = useState([]);
  const [charge, setCharge] = useState(true);

  const makeAPICall = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setTimeout( ()=>{
        setCharge(false)
        setListOfBank(data)
      },1000)

    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
      makeAPICall()
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
