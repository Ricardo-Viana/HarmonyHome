import { Box, Container, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { LoginContext } from "../context/LoginContext"
import { TaskContext } from "../context/TaskContext"
import SubmitButton from "../components/SubmitButton"

function AddTask(){

    const {loginInfo} = useContext(LoginContext)
    const [taskName, setTaskName] = useState("")
    const {tasks, setTasks, taskId, setTaskId} = useContext(TaskContext)
    const {room_id, house_id} = useParams()
    const navigate = useNavigate()

    const [taskNameError, setTaskNameError] = useState("")

    useEffect(() =>{
        if(!loginInfo){
            navigate("/")
        }
    }, [loginInfo, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()

        setTaskNameError("")

        if(taskName.trim() === ''){
            setTaskNameError("Nome da tarefa não pode estar vazio")
        }

        if(taskName.trim() !== ''){
            const taskFilter = tasks.filter(task => task.id_user === loginInfo.id && task.id_house === parseInt(house_id) && task.id_room === parseInt(room_id))
            const newTask = {
                id_user: loginInfo.id,
                id_house: parseInt(house_id),
                id_room: parseInt(room_id),
                id: taskId,
                name: taskName.trim(),
                done: false,
            }
            setTaskId(prevId => prevId + 1)
            setTasks(prevTasks => [...prevTasks, newTask])
            navigate(`/task/${room_id}/${house_id}`)
        }
    }

    return(
        <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", gap: 5, height:"75vh", alignItems: "center", justifyContent: "center"}}>
            <Box
                sx={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",}} >
                    <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo} alt="Logo"/>
            </Box>
            <form onSubmit={(e) => handleSubmit(e)} style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
                <Box sx={{display: "flex", flexDirection: "column", gap: 7, alignContent: "center"}}>
                    <Typography variant="h4" sx={{color: "primary.contrastText"}}>Adicionar nova tarefa</Typography>
                    <TextField onChange={(e) => setTaskName(e.target.value)} label="Adicionar nova tarefa" required error={taskNameError !== ''}/>
                    {taskNameError && <Typography variant="caption" color="error">{taskNameError}</Typography>}
                    <SubmitButton type="submit">Adicionar</SubmitButton>
                </Box>
            </form>
        </Container>
    )
}

export default AddTask
