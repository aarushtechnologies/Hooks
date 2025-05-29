//useCallback Hook - (cached) memoized the function

import { useCallback, useState } from 'react';

function Demo(props) {

    let [count,setCount] = useState(0)
    
    console.log('Rendering')

    /*
    let show = ()=>{
        console.log('This is my show Function')
    }
    */

    let show = useCallback(()=>{
        console.log('This is my show Function')
    },[])
    
   
    return (
        <div>
            <h1>This useCallback Example</h1>     
            <h1>{count}</h1>  
            
            <button onClick={()=> setCount(count+1) }>Click</button>
            <button onClick={show}>Click 2</button>
        </div>
    );
}

export default Demo;