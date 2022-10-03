import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [info, setInfo] = useState({
    name: 'long',
    age: "10",
    address: "Ha Noi",
  })

  const handelUpdate = () => {
    setInfo(prev => ({
        ...prev,
        bio: "John"
    }))
}

  return (
    <div className="App">
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handelUpdate}>Updates</button>
    </div>
  )
}
export default App
