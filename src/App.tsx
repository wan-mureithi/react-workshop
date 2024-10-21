import { useState } from 'react'
import './App.css'
import Users from './views/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='text-lg'>Test app</p>
    <Users/>
    </>
  )
}

export default App
