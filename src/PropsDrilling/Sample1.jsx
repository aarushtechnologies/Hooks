import React from "react"
import Sample2 from "./Sample2";

const Sample1 = (props) => {
    let name = "Aarush Sonawane";
  return (
    <>
    <div style={{border:"1px solid black",padding:"15px",background:"skyblue"}}>
      <h1>Sample1 Component</h1> 
      <h2>{name}</h2>
      <Sample2 name = {name} />
    </div>
    </>
  )
};

export default Sample1;
