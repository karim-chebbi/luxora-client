import React from 'react'
import './index.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';
import CarDetails from './pages/CarDetails';

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/carDetails/:id' element={ <CarDetails /> } />
        <Route path='/*' element={ <ErrorPage /> } />
      </Routes>
    </div>
  )
}

export default App