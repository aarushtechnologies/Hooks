import React from "react"
import Sample3 from "./Sample3";

const Sample2 = (props) => {
  return (
     <>
    <div style={{border:"1px solid black",padding:"15px",background:"pink"}}>
      <h1>Sample2 Component</h1>
      <h2>{props.name}</h2>
      <Sample3 name={props.name} />
    </div>
    </>
  )
};

export default Sample2;
