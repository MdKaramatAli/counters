
import { useEffect, useState } from 'react';
import './App.css'

function App() {


  let [value, setCounter] = useState(5);

  useEffect(() => {
    document.title =  `Count incremented to ${value}`;
  });


  const reset_val = 5;
  
  let  up = ( ()=>{
    if( value < 20) {
      value += 1;
    } 
    setCounter(value);
  })

  let  down = ( ()=>{
    if( value > 0) {
      value -= 1;
    } 
    setCounter(value);
  })
  let reset = ( () => {
    setCounter(reset_val);
  })

  return (
    <>
     <h1>Basic Counter </h1>

     <h3> By default : {value}  </h3>

     <button className='buttoms' onClick={up}> To increase </button>
     <button className='buttoms' onClick={down}> To Decrease </button>
     <button className='buttoms' onClick={reset}> Reset  </button>
    </>
  )
}

export default App
