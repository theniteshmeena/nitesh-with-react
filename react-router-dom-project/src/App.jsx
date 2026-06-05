import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-300 p-5 rounded-lg text-center text-white">
        React Router Dom Project
      </h1>
    </>
  )
}

export default App
