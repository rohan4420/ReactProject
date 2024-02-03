import './App.css'
import {useState} from 'react'
function App() {

let [counter, setCounter] = useState(0)
  if(counter < 1 || counter > 20){
    counter = 0
  }
  const addValue = () => {
    setCounter(counter+1)
  }
  const  removeValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={addValue}
      >Add value : {counter}</button><br />
      <button
      onClick={removeValue}
      >Remove value : {counter}</button>
    </>
  )
}

export default App
