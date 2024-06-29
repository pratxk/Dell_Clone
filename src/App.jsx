import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'
import ForgotPw from './pages/ForgotPw'
import SignUp from './pages/SignUp'
import ProductList from './pages/ProductList'
import SingleProductPage from './pages/SingleProductPage'
import Cart from './pages/Cart'
import Checkout from './components/Cart/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPw />} />
        <Route path='/register' element={<SignUp />} />
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path='/cart' element={
          <>
          <Navbar />
          <Cart/>
          <Footer />
        </>
        } />
        <Route path='/products' element={
          <>
            <Navbar />
            <ProductList />
            <Footer />
          </>
        } />
        <Route path="/products/:id" element={
          <>
            <Navbar />
            <SingleProductPage />
            <Footer />
          </>
        } />

      </Routes>
    </>
  )
}

export default App
