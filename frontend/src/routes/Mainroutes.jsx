import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PageNotFound from '../pages/PageNotFound'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Mainroutes