import React,{createContext, useContext} from 'react'
import Child1 from './child1'

export const usecontextTheme = createContext()
function Parent() {
 
    //create context
   

  return (
    <usecontextTheme.Provider  value="blue">
      <div>
        Parent
        <Child1 />
    </div>
    </usecontextTheme.Provider>
   
  )
}

export default Parent