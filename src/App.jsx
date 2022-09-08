import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/shared/Header'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getProducts } from './store/slices/products.slice'

function App() {
  const actions = useDispatch()

  useEffect(() => {
    actions(getProducts())
  }, [])


  // esto solo fue para crear el usuario

  // useEffect(()=>{
  //   const url='https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const userObj=
  //   {
  //     "firstName": "Ricardo",
  //     "lastName": "Cordovilla",
  //este correo ya está registrado
  //     "email": "ricardocordovilla@academlo.com",
  //     "password": "xavierfeijoo",
  //     "phone": "0961777009",
  //     "role": "admin"
  // }
  //   axios.post(url,userObj)
  //   .then(res=>console.log(res.data))
  //   .catch(err=>console.log(err))
  // },[])

  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
