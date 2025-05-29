import React, { useRef } from "react"

const Demo2 = (props) => {
    let inputRef =  useRef();
    let inputRef2 =  useRef();
    function change()
    {
        // console.log(inputRef.current)
        // console.log(inputRef.current.placeholder)
        // console.log(inputRef.current.name)
        inputRef2.current.style.background = 'red'
        inputRef2.current.style.color = 'yellow'
        // document.getElementById('txt_name').style.color ='red';
    }

  return (
    <div>
      <h1>Use Ref - DOM Accessing</h1>
    
<input type="text" ref={inputRef} placeholder="Enter name" id="txt_name" name="txt_name" />
<input type="text" ref={inputRef2} placeholder="Enter age" name="txt_age" />

      <button onClick={change}>Update</button>
    </div>
  )
};

export default Demo2;
