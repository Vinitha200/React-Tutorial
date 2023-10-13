
import React from 'react'
import Header from './header/header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home/Home'

export default function MainPage() {
  return (
    <div>
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/about" element={<Home/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}
