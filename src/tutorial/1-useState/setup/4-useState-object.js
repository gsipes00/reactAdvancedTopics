// this code uses two distinct ways of passing in state. One is by using an object with multiple parameters and one useState effect.
// the other is by using multiple useState effects, one for each parameter and removing the object.

import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({name: 'peter', age: 24, message: 'random message'})
  
  // alternative, use multiple state variables for each parameter
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('hellow world')
  // must be sure to spread the previous object and add what is new to prevent overwrite
  // const changeMessage = () => {
  //   setPerson({...person, message: 'hello world'})
  // }
  const changeMessage = () => {
    setMessage('mellow world')
  }
  
  return (
  <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    {/* <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3> */}
    <button className='btn' onClick={changeMessage}>change message</button>
  </>);
};



export default UseStateObject;
