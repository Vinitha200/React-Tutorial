import React,{useEffect, useState} from "react";
import dataimport from "./jsonData.json"
import { Table } from "antd";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title:'Age',
        dataIndex:'age'
    },
    {
        title:'Email',
        dataIndex:'email'
    }
]
const DisplayJson =()=>{
    const [data,setData]=useState([...dataimport])

   
     console.log("dataimport",dataimport)
    return(
        <>
        <div>
            <Table
            columns={columns}
            dataSource={data}
            />
        </div>
        </>
    )
}

export default DisplayJson