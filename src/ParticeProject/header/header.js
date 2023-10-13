import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
          <div className='cointainer'>
             <h1 style={{margin:"0px"}}>Blogs</h1>
             <nav className='cointainer-nav'>
               <Link to="/about"><span className='navspan'>Home</span></Link> 
                <span className='navspan'>Create</span>
             </nav>
            </div>
        </header>
       
        </>

    )
}

export default Header