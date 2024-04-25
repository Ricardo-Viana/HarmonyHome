import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import AddTask from './pages/AddTask'
import AddRoom from './pages/AddRoom'
import AddHouse from './pages/AddHouse'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/addtask' element={<AddTask />} />
      <Route path='/addroom' element={<AddRoom />} />
      <Route path='/addhouse' element={<AddHouse />} />
    </Routes>
    </>
  )
}

export default App
