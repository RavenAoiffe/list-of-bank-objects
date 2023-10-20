import { useState,useEffect } from 'react'
import Header from './components/Layout/Header';
import Spiner from './components/Layout/Spiner/Spiner';
import BankList from './components/BankList';
import Footer from './components/Layout/Footer/Footer';
import ButtonTop from './components/Layout/Top/ButtonTop';
import './components/Layout//header.css';


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
  const [darkMode, setDarkMode] = useState(false);

  const activeDarkMode = () =>{
    if(darkMode){
      setDarkMode(false)
      document.body.classList.remove('bg-neutral-900');
    }
    else{
      setDarkMode(true)
       document.body.classList.add('bg-neutral-900');
       document.body.classList.add('transition');
       document.body.classList.add('ease-in-out'); 
       document.body.classList.add('delay-150');
    }
  }
  return (
    <>
      <Header darkMode={darkMode}>LBO</Header>
        <div className="md:absolute mb-9 right-0 flex top-0 md:my-3 md:mt-3 gap-2 mx-4 mt-4">
          <button className=
          {darkMode ? `shadow-md border bg-neutral-900 text-white p-2 rounded-md text-md mx-3 md:mx-0 w-11/12  md:w-40` :`shadow-md bg-white border text-black p-2 rounded-md hover:shadow-lg text-md mx-3 md:mx-0 w-11/12  md:w-40`}
            onClick={recall}
          >Search</button>
          <a className="dark-mode hover:shadow-lg border rounded-lg" onClick={activeDarkMode} title='dark mode'>
              <div className={darkMode ? `sun icon-dark-mode bg-neutral-900` :`moon icon-dark-mode`}></div>
          </a>
        </div>
        <div className='container mx-auto'>
          <div>
            {charge ? <Spiner darkMode={darkMode}/> :  <BankList 
              listOfBank={ listOfBank}
              darkMode={darkMode}
              />}
            
          </div>
      </div>
      <Footer
       darkMode={darkMode}
       />
      <ButtonTop  darkMode={darkMode}/>
    </>
  )
}

export default App
