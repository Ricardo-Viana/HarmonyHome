import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { RegisteredContext } from './context/RegisteredContext'
import { useEffect, useState } from 'react'
import Houses from './pages/Houses'

function App() {
  const [registrationInfo, setRegistrationInfo] = useState([]);

  const [loginInfo, setLoginInfo] = useState(null)

  useEffect(() => {
    console.log(registrationInfo)
    console.log(loginInfo)
  }, [registrationInfo, loginInfo])

  return (
    <>
    <RegisteredContext.Provider value={{ registrationInfo, setRegistrationInfo, setLoginInfo }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </RegisteredContext.Provider>

    <Routes>
      <Route path='/houses' element={<Houses />} />
    </Routes>

    </>
  )
}

export default App
