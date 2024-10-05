
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setvalue]= useState(0);
  const handleValue=(value)=>{
   
    if(value==="increment"){
      setvalue((prev)=>  prev+1)
    }
    else{
      setvalue((prev)=>  prev-1 )
    }
    }
  
  
  return (
    <>
    <h1>Couter App</h1>
    <p>Count: {value}
    </p>
    <button
    onClick={()=>handleValue("increment")}
    >Increment</button>
    <button
      onClick={()=>handleValue("decrement")}
      >Decrement</button>
    </>
  );
}

export default App;
