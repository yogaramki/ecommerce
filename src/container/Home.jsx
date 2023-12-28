import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../Components/Header'
import Dashboard from './Dashboard'
import Product from './Product'
// import Cart from '../redux/reducer/cart'
import CartComp from './CartComp'

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<Dashboard/>}   />
        <Route path="/product/:id" element={<Product/>} />
        <Route   path="/CartComp" element={<CartComp/>}   />
      
      </Routes>
    </div>
  )
}
