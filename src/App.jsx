import React, { Suspense } from 'react';

import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Ball from './Ball';
import Users from './Users';


const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json());

function App() {

  function handleEvent(){
    alert('click me');
  }

  const handler2=()=>{
    alert('click me 3')
  }

  const handler3=(num)=>{
  const newNumber=num+5;
  alert(newNumber);
  }

  return (
    <>
      
      <h1>react event haldler</h1>
    
      <Suspense fallback={<p>Loading...</p>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>



      <Ball></Ball>

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleEvent}>click me</button>
      <button onClick={function handler(){alert('click me 2')}}>click me2</button>
      <button onClick={handler2}>click me 3</button>
      <button onClick={()=>handler3(10)}>add number at 5</button>
      
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
