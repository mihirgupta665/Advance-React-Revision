import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState()

    const passwordGenerator = useCallback( () => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (numberAllowed) str+="0123456789"
        if (charAllowed) str+="!@#$%^&-_+=[]{}~`"

        for(let i=0; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, numberAllowed, charAllowed])

    useEffect( () => { passwordGenerator() } , [length, numberAllowed, charAllowed, passwordGenerator])

    return (
            <div className="w-full max-w-xl mx-auto my-8 px-5 py-2  rounded-lg shadow-md text-orange-600 bg-gray-700 text-center ">
                <h1 className="text-2xl text-center text-white mb-2 ">Password Generator</h1>
                <div className="flex shadow-rounded-lg overflow-hidden mb-4">
                    <input type="text" value={password} className='outline-none w-full px-3 rounded-lg py-1' placeholder="Password" readOnly/> 
                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
                </div> 
                <div className='flex text-sm gap-x-5 pb-3'>
                    <div className='flex items-center gap-x-1'>
                        <input type="range" id="lengthInput" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} className="cursor-pointer"/>
                        <label>Length : {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox" value={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}} />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox" id="characterAllowed" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}} />
                        <label htmlFor="characterAllowed">Characters</label>
                    </div>
                </div>
            </div>
        
    )
}

export default App
