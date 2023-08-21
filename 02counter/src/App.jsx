import {useState} from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1);
  
  const addValue = () => {
    // console.log("Add Value ", Math.random())
    // counter = counter + 1
    // setCounter(counter + 1)
    if(counter < 5){
      setCounter(counter => counter + 1)
    }
  }

  const removeValue = () => {
    // console.log('Remove Value', Math.random())
    if (counter > 0) {
      setCounter(counter => counter - 1);
    }
  }
  return (
    <>
      <h2>Chai aur React</h2>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add {counter}</button>
      <button 
      onClick={removeValue}
      >Remove {counter}</button>
      <p>Number: {counter} </p>
    </>
  )
}

export default App
