import React from 'react'

const SloatM = (props) =>{
  // let x = '😄';
  // let y = '😄';
  // let z = '🐒';

  // Object dstructuring 
  let x =  props.x;
  let y =  props.y;
  let z =  props.z;

  if(x===y && y === z){
    return (
      <div className="slot_inner">
        <h1>{x}{y}{z}</h1>
        <h1>This is maching</h1>
        <hr />
      </div>
    )
  }
  else{
    return (
      <div className="slot_inner">
        <h1>{x}{y}{z}</h1>
        <h1>This is not maching</h1>
        <hr />
      </div>
    )
  }
}

function App() {
  return (
    <>
     <h1> 🎰 welcome to <span>Slot machine game </span> 🎰 </h1> 
     <SloatM x='😄' y='😄' z='😄'/>
     <SloatM x='🎅' y='💃' z='👯' />
     <SloatM x='👌' y='✈️' z =' 😮‍💨' />
    </>
  )
}

export default App
