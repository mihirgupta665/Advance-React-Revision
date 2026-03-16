// padding goes till 12 and margin goes till 20
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-4xl text-center bg-green-500 p-12 m-20">Learning Routers</h1>
        </>
    )
}

export default App
