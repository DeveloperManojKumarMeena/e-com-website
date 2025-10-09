import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default Mainroutes