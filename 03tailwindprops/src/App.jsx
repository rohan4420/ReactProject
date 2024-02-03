import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name : "rohan",
    age  : 28
  }
  let newArray = [1,2,3,4]
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwing test</h1>
     <Card userName="rahul" btnText="Click me"/>
     <Card userName="rohan"  someArr = {newArray}/>
    </>
  )
}

export default App
