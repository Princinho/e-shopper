import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/home'
import Layout from './Pages/Layout'
import Shop from './Pages/Shop'
import Featured from './Pages/Featured'
import Recommended from './Pages/Recommended'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop/>}/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='recommended' element={<Recommended/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
