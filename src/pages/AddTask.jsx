import { Box, Button, Container, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate, useParams } from "react-router-dom"
import RedirectButton from "../components/RedirectButton"
import SubmitButton from "../components/SubmitButton"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { TaskContext } from "../context/TaskContext"

function AddTask(){

    const loginInfo = useContext(LoginContext)

    const [taskName, setTaskName] = useState("")

    const {tasks, setTasks} = useContext(TaskContext)

    const {room_id, house_id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if(loginInfo){

        }
        else{
            navigate("/")
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        if(taskName !== ''){
            const taskFilter = tasks.filter(task => task.id_user === loginInfo.id && task.id_house === parseInt(house_id) && task.id_room === parseInt(room_id))
            const newTask = {
                id_user: loginInfo.id,
                id_house: parseInt(house_id),
                id_room: parseInt(room_id),
                id: taskFilter.length + 1,
                name: taskName,
            }
            setTasks(prevTasks => [...prevTasks, newTask])
            navigate(`/task/${room_id}/${house_id}`)
        }
        else{
            alert("Errado")
        }
    }

    return(
    <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", gap: 5, height:"75vh", alignItems: "center", justifyContent: "center"}}>
        <Box
            sx={{display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",}} >
                <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo}/>
        </Box>
        <form onSubmit={(e) => handleSubmit(e)} style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
            <Box sx={{display: "flex", flexDirection: "column", gap: 7, alignContent: "center",}}>
                <Typography variant="h4" sx={{color: "primary.contrastText"}}>Adicionar nova tarefa</Typography>
                <TextField onChange={(e) => setTaskName(e.target.value)}label="Adicionar nova tarefa" required/>
                <SubmitButton type="submit">Adicionar</SubmitButton>
            </Box>
        </form>

    </Container>
    )
}

export default AddTask