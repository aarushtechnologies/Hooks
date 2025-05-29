import React, { useEffect, useRef, useState } from "react"

const Demo = (props) => {
    let [count,setCount] = useState(0);
    //useState - value update & update UI 
    let count2 = useRef(0);
    //useRef doesn't cause re-rendering
    // useRef = value update But not update UI(Rendering)

    useEffect(()=>{
        console.log('render')
    },[count,count2])

  return (
    <div>
      <h1>Use Ref Hook Example</h1>
      <h2>{count}</h2>

      <button onClick={()=>setCount(count+1)}>Click</button>
      <hr />
      <h2>{count2.current}</h2>
      <button onClick={()=> count2.current += 1}>Click 2</button>
    </div>


  )
};

export default Demo;
