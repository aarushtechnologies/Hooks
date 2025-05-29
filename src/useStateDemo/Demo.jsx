import React, { useState } from "react"

const Demo = (props) => {
    
    // let [var,function] = useState(initial_value)

    let [no1,setNo1] = useState(0)
   let [no2,setNo2] = useState(0) 
   let [res,setRes] = useState(0) 
    let [city,setCity] = useState('')

   function add()
   {
     setRes(Number(no1) + Number(no2))
   }
    function sub()
   {
     setRes(Number(no1) - Number(no2))
   }

  return (
    <div>
      <h1>Demo Component</h1>

    <hr />

    Select City : <select name="" id="" onChange={(e)=>setCity(e.target.value)}>
        <option value="Nashik">Nashik</option>
        <option value="Vaijapur">Vaijapur</option>
    </select>

    <hr />


    No1 : <input type="text" onChange={(e)=> setNo1(e.target.value)}   />
    <br /><br />
    No2 : <input type="text" onChange={(e)=> setNo2(e.target.value)} />
    <br /><br />
    Result : {res}
    <br /><br />
    <button onClick={add}>Add</button>
    <button onClick={sub}>Sub</button>

    </div>
  )
};

export default Demo;
