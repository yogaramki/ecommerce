import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../container/Home'

export default function Index() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='*' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
