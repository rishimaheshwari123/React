import React, { useState } from 'react';
import './index.css';



function App() {
  // const state = useState;
  const [count, setCount] = useState(0);
  
  const IncNum =()=>{
    setCount(count+1);
    // console.log(count);
  }

  return (
    <>
      <div className='first'>
      <h1> {count} </h1><br />
      </div>
      <div className='firsts'>
      <button onClick={IncNum}>Click Now</button>
      </div>
    </>
  );
};

export default App
