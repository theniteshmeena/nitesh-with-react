import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook 

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str+="0123456789"
    }

    if(characterAllowed){
      str+="!@#$%^&*()_+"
    }

    for(let i=0; i<length; i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length))
    }

    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator, length, numberAllowed, characterAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rouded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className="text-center text-white my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden md-4">
        <input
        type="text"
        value={password}
        placeholder='Your Password'
        readOnly
        ref={passwordRef}
        className="w-full px-3 py-1 outline-none bg-white"
        />
        <button
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2 my-3">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min="6"
          max="20"
          length={length}
          onChange={(e) => setLength(e.target.value)}
          className="cursonr-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            className="cursor-pointer"
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={()=>{
              setCharacterAllowed((prev) => !prev)
            }}
            className="cursor-pointer"
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
