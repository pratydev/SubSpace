import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import './App.css'
import Deposit from './Components/Deposit'
import Withdraw from './Components/Withdraw'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dashboard /> */}
    {/* <Deposit/> */}
    <Withdraw/>

     
    </>
  )
}

export default App
