import React, { useContext } from "react"
import { myContext } from "./Sample1";

const Sample3 = (props) => {
    let stud = useContext(myContext)
  return (
    <div style={{border:"1px solid black",padding:"10px",background:"yellow"}}>
      <h1> Sample 3</h1>
      <h2>{stud.name} - {stud.age} - {stud.city}</h2>

    </div>
  )
};

export default Sample3;
