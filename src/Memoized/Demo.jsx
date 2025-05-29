//useMemo Hook - (cached) memoized the value

import React, { useMemo, useState } from 'react';

function Demo(props) {

    let [count,setCount] = useState(0)
 
    
    let calculate = useMemo(()=>{
        
        console.log('re-render')      
        
        let res = 0;

        for(let i=0; i<=100; i++)
        {
            res += i
            console.log(res)
        }

        return res;

    
    },[])
    

//    let calculate = useMemo(()=>{
//         console.log('re-render')
//         return 100
//     },[])


    return (
        <div>
            <h1>This UseMemo Example</h1>     
            <h1>{count}</h1>
            <h1>{calculate}</h1>
            <button onClick={()=> setCount(count+1) }>Click</button>
        </div>
    );
}

export default Demo;