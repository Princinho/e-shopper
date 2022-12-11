
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Shop from './Pages/Shop'
import Featured from './Pages/Featured'
import Recommended from './Pages/Recommended'
import Product from './Pages/Product'
import useCart from './components/Cart'
import { useState } from 'react'
function App() {
  const cart = useCart()
  console.log(cart.isOpen())
  return (
    <div className={`App ${cart.isOpen() ? 'open-cart' : ''}`}>
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop cart={cart} />} />
          <Route path='featured' element={<Featured cart={cart} />} />
          <Route path='recommended' element={<Recommended cart={cart} />} />
          <Route path='product/:id' element={<Product cart={cart} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
