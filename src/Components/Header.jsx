import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



export default function Header() {
    const navigate=useNavigate()
  return (
    <div className=' p-3 bg-info'>
       <h3> ONLINE HUB</h3>
       <div className='row justify-content-center pt-2 pb-1'>
         <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
         <input className='form-control'
            type='search'
            placeholder='search.....' />
            <button className='btn btn-success ms-4 me-4' onClick={()=>navigate('/')}><FaHome/></button>
            {/* <input className='form-control'
            type='search'
            placeholder='search.....' /> */}
            <button className='btn btn-success ms-3' onClick={()=>navigate('/CartComp')}><FaShoppingCart/></button>
        
        
        
         </div>

       </div>
    </div>
  )
}
