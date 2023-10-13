//using fetch method 

import React,{useState,useEffect} from "react";
import stateData from "../Pagination/OptionData"
const Index = ()=>{

    const [UserData,setUserData]=useState()
    const [Page,setPage]=useState(1)
    const fetchData= async ()=>{
        const requestParam = {
            method:'GET'
        }
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',requestParam)
                  .then((data)=>data.json())
                  .then((data)=>{
                    console.log(data)
                    setUserData(data)
                  })
        
        
    }
    
    useEffect(()=>{
        fetchData()
    },[])

  //partice array of object
    const carData = [
        {
          name: "BMW",
          model: 2022
        },
       {
          name: "Audi",
          model: 2021
        },
      ]

      const result = carData.map((item)=>{
        return item.name
      })

      console.log(result,carData)

      //DropDown funtions
      const [JsonData,setJsonData]=useState([...stateData])
      const StateDrop = JsonData?.map((item)=>({
        label:item.State_name
      }))
    //   const CityDrop = JsonData?.Citys?.map((item)=>({
    //     label:item
    //   }))
    console.log("JsonData",JsonData.Citys,JsonData)
     return(
        // <div>
        //     {UserData?.slice(Page*10-10,Page*10)?.map((item)=>{
        //         return(
        //             <>
        //             <div>
              
        //               <h3 key={item.id} style={{display: "flex"}}>{item.title}</h3>
        //               <p key={item.id} style={{display: "flex"}}>{item.body}</p>
        //               <br/>
        //             </div>
        //             </>
        //         )

                
        //     })}
        //     {UserData?.length>0 && 
        //     <div>
        //         <span>prev</span>
        //         {
        //             [...Array(UserData.length/10)].map((_,index)=>{
        //                 return <span>{index+1}</span>
        //             })
        //         }
        //        <span></span>

        //         <span>Next</span>
        //         </div>}
        // </div>
        <div>
            <label>ID</label>
         <select>
            {StateDrop.map((item)=>{
                return <option>{item.label}</option>
            })}
         </select>
            {/* <label>Name</label>
            <select>
           {CityDrop.map((item)=>{
            return (<option>{item.label}</option>)
           })}      */}
               
            {/* </select> */}
        </div>
     )
}

export default Index;