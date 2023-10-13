import React, { useState } from "react"

const States = () => {
    const [count, setCount] = useState(0)
    const [object, setObject] = useState({})
    const [array, setArray] = useState([])
    const [boolean, setBoolean] = useState(false)

    const dataTypeState = () => {
        setBoolean(true)
        setObject({
            name: "vinitha",
            age: 23
        })
        setArray([
            {
                name: "vinitha",
                age: 23
            },
            {
                name: "ram",
                age: 23
            }
        ])
    }
    return (
        <>
            <button onClick={() => { setCount(prestate => prestate + 1) }}>{count}</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <button onClick={dataTypeState}>DataType inState</button>

            <div>
                {boolean && <>  <div>{array.map((item) => {
                    return (<p> {item.name} {item.age}</p>)
                })}</div>
                    <div>{object.name} {object.age}</div></>
                }
            </div>
        </>

    )
}

export default States

/*
1.increment the count 
2. use all data type in useState (boolean,object,array,number)
*/ 