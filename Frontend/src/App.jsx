import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500 text-white p-10 text-center">
    <h1 className="text-3xl font-bold">Hello, Tailwind!</h1>
  </div>
  )
}

export default App
