import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../Components/Header'
import Dashboard from './Dashboard'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Cart from '../redux/reducer/cart'
import CartComp from './CartComp'
import Caros from '../Components/Caros'

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Caros /> */}
      <Routes>
        <Route  path="/" element={<Dashboard/>}   />
        <Route path="/product/:id" element={<Product/>} />
        <Route   path="/CartComp" element={<CartComp/>}   />
      
      </Routes>

    </div>
  )
}
