import React from 'react';
import './App.css'

function App() {

  return (
    <>
      
      <h1>react core concept part-1</h1>
      <Friends  name='mosaraf'></Friends> 
      <Friends  name='rony'></Friends> 
      <Friends  name='imran'></Friends> 
      
    </>
  )
}


function Friends(props){
  console.log(props)
  return(
    <div>
      <h1>name:{props.name}</h1>
    </div>
  )
}

export default App
