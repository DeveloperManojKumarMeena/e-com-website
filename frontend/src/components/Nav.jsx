import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   <nav className='flex gap-4 p-auto justify-center text-xl font-semibold'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/login">Login</NavLink>
   </nav>
  )
}

export default Nav