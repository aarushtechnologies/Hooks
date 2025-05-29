import React, { createContext } from "react"
import Sample3 from "./Sample3";

export let myContext = createContext()

const Sample1 = (props) => {
    // let name = "Aarush Sonavane"
    // let stud = {
    //     name :'Aarush Sonavane',
    //     age:8,
    //     city:'rahta'
    // }
    let students = ['Ashwini','Sachin','Sakshi','Rajendra','Vishal','Rohan','Shiv']
    return (
        <>
        <myContext.Provider value={students}>
            <div style={{ border: "1px solid black", padding: "10px", background: "skyblue" }}>
                <h1> Sample 1</h1>
                {/* <h2>{stud.name} - {stud.age} - {stud.city}</h2> */}
                <Sample3 />
            </div>
        </myContext.Provider>
        
        </>
        

    )
};

export default Sample1;
