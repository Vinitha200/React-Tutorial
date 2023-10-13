import React, { useState, useEffect } from "react";
import "./style.css"
const DisplayData = () => {

    const [defaultdata, setdefaultdata] = useState([]);
    const [data, setData] = useState([]);
    const [MapData, setMapData] = useState([])
    const [showMap, setShowMap] = useState(false)


    //api call
    const getData = () => {
        const res = fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log("apiCall", data)
                setData(data)
                setdefaultdata(data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const new_id = () => {
        setShowMap(true)
        let newid = data?.map((item) => {
            return item.id * 2
        })
        setMapData(newid)
    }

    const filter_name = () => {
        const filtername = data?.filter((item) => {
            return item.name[0].toLowerCase() === "l"
        })
        setData(filtername)
        console.log("filtername",filtername)
    }
    const reset = () => {
        setData(defaultdata)
        setShowMap(false)
    }


    return (
        <>
            <div><h1>User</h1></div>
            <div style={{ display: "flex" }}>
                {data?.map((item) => {
                    return (
                        <div className="card-main" key={item?.id}>
                            <div>{item?.name}</div>
                            <div>{item?.username}</div>
                        </div>
                    )
                })}
            </div>
            <div style={{ display: "flex" }}>
                <button onClick={new_id}>click me to Map</button>
                <button onClick={filter_name}>click me to Filter</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>
                {showMap && <div>{MapData.map((item) => {
                    return (
                        <div className="card-main" key={item?.id}>
                            <div>{item}</div>
                        </div>
                    )
                })}</div>}
           
            </div>
        </>
    )
}

export default DisplayData;