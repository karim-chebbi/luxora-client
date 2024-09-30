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
import ErrorNotification from './components/ErrorNotification';
import SuccessNotification from './components/SuccessNotification';
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const dispatch = useDispatch()

  const isAuth = useSelector((state)=> state.AuthReducer.isAuth)

  const user = useSelector((state)=> state.AuthReducer.user)

  const authErrors = useSelector((state)=> state.AuthReducer.errors)

  const authSuccess = useSelector((state)=> state.AuthReducer.success)

  useEffect(() => {
          if (localStorage.getItem("token")) {
            dispatch(current());
          }
  }, [dispatch])
  
  return (
    <div>
      {authErrors && authErrors.map((el) => <ErrorNotification error={el} />)}
      {authSuccess &&
        authSuccess.map((el) => <SuccessNotification success={el} />)}
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/shop" element={<Shop />} />
        {isAuth ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/carDetails/:id" element={<CarDetails />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App