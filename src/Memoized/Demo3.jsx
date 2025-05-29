//React.memo

import React, { useMemo, useState } from 'react';


let Heading = React.memo(()=>{
    console.log('Heading - re -rendering')
    return (
        <h1>Heading - Codingwale</h1>
    )
})

/*
let Heading = ()=>{
    console.log('Heading - re -rendering')
    return (
        <h1>Heading - Codingwale</h1>
    )
}
*/

function Demo3(props) {

    let [count,setCount] = useState(0)
 
    console.log('re-rendering')
    
    return (
        <div>
            <h1>This React.memo Example</h1>     
            <h1>{count}</h1>
            
            <button onClick={()=> setCount(count+1) }>Click</button>
            <Heading />
        </div>
    );
}

export default Demo3;