import React from 'react'
import Child3 from './child3'
import {usecontextTheme} from "../useContext/parent"

function Child2() {

    const theme = React.useContext(usecontextTheme)
    console.log("theme",theme)
  return (
    <div>Child2
        <Child3 />
    </div>
  )
}

export default Child2