import React, { useContext } from 'react'
// import CompC from './CompC'
import { FirstName, LastName} from './App';

function CompB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>Hi My Name is {fname} {lname}</h1>
    </>
  )
}

export default CompB
