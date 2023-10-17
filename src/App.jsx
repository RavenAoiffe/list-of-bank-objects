import { useEffect } from 'react'


const baseURL = `${import.meta.env.VITE_API_URL_DEV}`;

function App() {

  const makeAPICall = async () => {
    try {
    const response = await fetch(baseURL);
      const data = await response.json();
      console.log({ data })

    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <>
      <p className="text-3xl">
        Bank Objects
      </p>
    </>
  )
}

export default App
