import { useState } from 'react'
import './App.css'
import {InputBox} from "./components/input.js"
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"

function App() {
  const [amount, setAmount] = useState(0)
  const [to, setTo] = useState("usd")
  const [from, setFrom] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
      <div className='text-3xl text-orange-500 text-center bg-gray-700'>Currency Convertor</div>
    </>
  )
}

export default App
