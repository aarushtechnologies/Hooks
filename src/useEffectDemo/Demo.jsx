import React, { useEffect, useState } from "react"

const Demo = (props) => {

let [count , setCount] = useState('');
let [name , setName] = useState('');
// useEffect(()=>{},[dependency(states)])

/*
// All effect = change cover
useEffect(()=>{
    console.log('hello')
})

// run = only count (state) changes
useEffect(()=>{
    console.log('hello')
},[count])


// execute once 
useEffect(()=>{
    console.log('hello')
},[])
*/


  return (
    <div>
      <h1>Use Effect Demo</h1>
      <h1>{count}</h1>

    <button onClick={()=>setCount(count+1)}>Click</button>

    <input type="text" onChange={(e)=>{setName(e.target.value)}} />
    </div>
  )
};

export default Demo;
