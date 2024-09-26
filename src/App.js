import React, { useEffect } from 'react'
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
import Profile from './pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Actions/AuthActions';

const App = () => {

  const dispatch = useDispatch()

  const isAuth = useSelector((state)=> state.AuthReducer.isAuth)

  const user = useSelector((state)=> state.AuthReducer.user)

  console.log(isAuth)

  console.log(user)

  useEffect(() => {
          if (localStorage.getItem("token")) {
            dispatch(current());
          }
  }, [dispatch])
  
  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/shop" element={<Shop />} />
        {isAuth ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="/carDetails/:id" element={<CarDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App