import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl text-orange-500 text-center bg-gray-700'>Currency Convertor</div>
    </>
  )
}

export default App
