import { useState } from 'react'
import Users from './views/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ paddingLeft: 20 }}>
      <p className="text-3xl font-bold underline">Test app</p>
      <Users />
    </div>
  )
}

export default App
