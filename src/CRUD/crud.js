import React, { useRef, useState } from 'react';


const Crud = () => {
    const nameref = useRef()
    const ageref = useRef()
    const datastatic = [
        {
            id: 1,
            name: "ravi",
            age: 50
        },
        {
            id: 2,
            name: "ram",
            age: 52
        }
    ]
    const [data, setData] = useState(datastatic)
    const [updateClicked,setUpdateClicked]=useState(false)
    const [oldData,setOldData]=useState({})

    const onhandelChange = (event) => {
        event.preventDefault();
        const newname = event.target.elements.name.value
        const newage = event.target.elements.age.value
        const newobj = {

            name: newname,
            age: newage
        }
        setData(prev => (prev.concat(newobj)))
        nameref.current.value = ""
        ageref.current.value = ""
    }

    

    const onhandledelete =(deleteid)=>{
        const new_list = data.filter((i)=>(i.id !== deleteid))
        setData(new_list)
    }

    const onhandelUpdate =(record,id,e)=>{
      console.log("edit",record,id)
      setUpdateClicked(true)
      setOldData({...record,nameref:record.name,ageref:record.age})
      
    }

   
    return (
        <>
          {updateClicked &&
           <form >
           <label>Name</label>
           <input name="name" value={oldData.name} onChange={(e)=>setOldData({...oldData,name:e.target.value})}></input>
           <label >Age</label>
           <input type="number" name="age" value={oldData.age} onChange={(e)=>setOldData({...oldData,age:e.target.value})}></input>
           <button onClick={()=>setData}>Update</button>
       </form>
          }
          
            <div>
                <form onSubmit={onhandelChange}>
                    <label>Name</label>
                    <input name="name" ref={nameref}></input>
                    <label >Age</label>
                    <input type="number" name="age" ref={ageref}></input>
                    <button>submit</button>
                </form>

                <table style={{ border: "1px solid black" }}>


                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                    {data.map((item) => {
                        return <>
                           <tr>
                                <td>{item?.name}</td>
                                <td>{item?.age}</td>
                                <tr>
                                    <button onClick={(e)=> onhandelUpdate(item,item.id,e)}>Edit</button>
                                    <button onClick={()=> onhandledelete(item?.id)}>Delete</button>
                                </tr>
                            </tr>
                        </>
                    }
                    )}
                </table>


            </div>
        </>
    )
}


export default Crud;