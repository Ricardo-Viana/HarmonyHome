import { useContext, useEffect, useState } from "react"
import NavBarBox from "../components/NavBarBox"
import { Box, Typography, Container, Checkbox, IconButton } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomBarBox from "../components/BottomBarBox"
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { TaskContext } from "../context/TaskContext";

function Tasks(){

    const loginInfo = useContext(LoginContext)

    const {tasks} = useContext(TaskContext)

    const navigate = useNavigate()

    const [taskList, setTaskList] = useState([])

    const {room_id, house_id} = useParams()

    useEffect(() => {
        if(loginInfo){
            document.body.style.backgroundColor = "white"
            const tasksFiltered = tasks.filter(task => task.id_user === loginInfo.id && task.id_house === parseInt(house_id) && task.id_room === parseInt(room_id))
            setTaskList(tasksFiltered)
        }
        else{
            navigate("/")
        }
    }, [])

    return(
        <>
        { loginInfo &&
         <Container sx={{display: "flex", flexDirection: "row", }}>
            <NavBarBox title="TITULO AQUI"/>
            <Box sx={{display: "flex", flexDirection : "column", justifyContent: "flex-start",  marginLeft: "30px", position: "absolute", top: "150px"}}>
            {taskList &&
                taskList.map((task, index) => (
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <Checkbox
                        inputProps={{ 'aria-label': 'controlled' }} 
                        sx={{color: "primary.contrastText", '&.Mui-checked': {
                            color: "secondary.main"
                        }}} key={index}
                        />
                    <Typography variant="h6" sx={{color: "primary.contrastText"}}> {task.name} </Typography>                    
                    </Box>
                ))
            }
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <IconButton onClick={() => navigate(`/addTask/${room_id}/${house_id}`)} aria-label="Add" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "secondary.light"}}> Nova Task </Typography>                    
                </Box>
            </Box>
        </Container>
        }
            <BottomBarBox tasks="tarefasPendentes"></BottomBarBox>
        </>
    )
}

export default Tasks