import React, { useEffect } from 'react'

export const AdviceComponent = () => {

  useEffect(() => {
    //when component is mounted
    alert("Component AdviceComponet is mounted!!");

    //when the component is disassembled
    return () => {
      alert("Component is disassembled!!!")
    };

  }, []); // it is executed once because i gave it an empty array


  return (
    <div>
      <hr/>
      <h3>Greetings Luca, how are you?</h3>
      <button onClick={e => {
        alert("Welcome!!")
      }}>show alert</button>
    </div>
  )
}
