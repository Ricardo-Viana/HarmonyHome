import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { RegisteredContext } from './context/RegisteredContext'
import { useEffect, useState } from 'react'
import Houses from './pages/Houses'
import { LoginContext } from './context/LoginContext'
import {HouseContext} from './context/HouseContext'
import AddHouse from './pages/AddHouse'

function App() {
  const [registrationInfo, setRegistrationInfo] = useState([]);

  const [loginInfo, setLoginInfo] = useState(null);

  const [houses, setHouses] = useState([])

  useEffect(() => {
    console.log("registration", registrationInfo)
    console.log("Login",loginInfo)
    console.log("Houses",houses)
  }, [registrationInfo, loginInfo, houses])

  return (
    <>
    <RegisteredContext.Provider value={{ registrationInfo, setRegistrationInfo, setLoginInfo }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </RegisteredContext.Provider>

    <LoginContext.Provider value={loginInfo}>
    <HouseContext.Provider value={{houses, setHouses}}>
    <Routes>
      <Route path='/houses' element={<Houses />} />
      <Route path='/addhouse' element={<AddHouse />}></Route>
    </Routes>
    </HouseContext.Provider>
    </LoginContext.Provider>
    </>
  )
}

export default App
