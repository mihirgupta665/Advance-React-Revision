import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name: "mihir",
    age: 21
  }
  let arr = [1,2,3];

  return (
   <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl m-5'>Tailwind Test</h1>
    <Card channel="Mihir Gupta" myobj={obj} myarr={arr} btn_text="Thankyou"/>   {/* every thing must be passed and all the collections must eb made before return */}
    <Card channel="Adiba Muskan" btn-text="Welcome"/>
   </>
  )
}

export default App
