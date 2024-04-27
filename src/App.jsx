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
import Rooms from './pages/Rooms'
import AddRoom from './pages/AddRoom'
import { RoomContext } from './context/RoomContext'
import Tasks from './pages/Tasks'
import { TaskContext } from './context/TaskContext'
import AddTask from './pages/AddTask'

function App() {
  const [registrationInfo, setRegistrationInfo] = useState([]);

  const [loginInfo, setLoginInfo] = useState(null);

  const [houses, setHouses] = useState([]);

  const [rooms, setRooms] = useState([]);

  const [tasks, setTasks] = useState([]);

  return (
    <>
    <RegisteredContext.Provider value={{ registrationInfo, setRegistrationInfo, setLoginInfo }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </RegisteredContext.Provider>

    <LoginContext.Provider value={{loginInfo, setLoginInfo}}>      
    <TaskContext.Provider value={{tasks, setTasks}}>

    <HouseContext.Provider value={{houses, setHouses}}>
    <Routes>
      <Route path='/houses' element={<Houses />} />
      <Route path='/addhouse' element={<AddHouse />}></Route>
    </Routes>
    </HouseContext.Provider>

    <RoomContext.Provider value={{rooms, setRooms}}>
    <Routes>
      <Route path='/rooms/:id' element={<Rooms />}></Route>
      <Route path='/addRoom/:id' element={<AddRoom />}></Route>
    </Routes>
    </RoomContext.Provider>

    <Routes>
      <Route path='/task/:room_id/:house_id' element={<Tasks />}></Route>
      <Route path='/addTask/:room_id/:house_id' element={<AddTask />}></Route>
    </Routes>
    
    </TaskContext.Provider>
    </LoginContext.Provider>

    </>
  )
}

export default App
