import { useContext, useEffect, useState } from "react"
import NavBarBox from "../components/NavBarBox"
import { Box, IconButton, Typography, Container } from "@mui/material"
import BottomBarBox from "../components/BottomBarBox"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { LoginContext } from "../context/LoginContext";
import { HouseContext } from "../context/HouseContext";
import { useNavigate, useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { TaskContext } from "../context/TaskContext"

function Rooms(){

    const {loginInfo} = useContext(LoginContext)

    const { rooms } = useContext(RoomContext)

    const {tasks} = useContext(TaskContext)

    const [countTasks, setCountTasks] = useState(0)

    const [userHouseRooms, setUserHouseRooms] = useState([]);

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if(loginInfo){
            document.body.style.backgroundColor = "white"
            const roomFiltered = rooms.filter(room => room.id_user === loginInfo.id && room.id_house === parseInt(id))
            setUserHouseRooms(roomFiltered)
            setCountTasks(tasks.filter(task => task.id_user === loginInfo.id && task.id_house === parseInt(id)).length)
        }
        else{
            navigate("/")
        }
    }, [])

    return(
        <>
        { loginInfo &&
        <Container sx={{display: "flex", flexDirection: "row"}}>
            <NavBarBox title={`Cômodos de ${loginInfo.user}`} />
            <Box sx={{display: "flex", flexDirection : "column", justifyContent: "flex-start",  marginLeft: "30px", position: "absolute", top: "150px"}}>
            {userHouseRooms &&
                userHouseRooms.map((comodo, index) => (
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <Typography variant="h6" sx={{color: "secondary.main"}}> ({`${(tasks.filter(task => task.id_user === loginInfo.id && task.id_house === parseInt(id) && task.id_room === comodo.id)).length}`})</Typography> 
                    <IconButton aria-label="Add" sx={{color: "primary.contrastText"}} onClick={() => navigate(`/task/${comodo.id}/${id}`)}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography key={index} variant="h6" sx={{color: "primary.contrastText"}}> {comodo.name} </Typography>                    
                    </Box>
                ))
            }
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <IconButton onClick={() => navigate(`/addRoom/${id}`)} aria-label="Add" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "secondary.light"}}> Novo Cômodo </Typography>                    
                </Box>
            </Box>
        </Container>
        }
        <BottomBarBox tasks={countTasks}></BottomBarBox>
        </>
    )
}


export default Rooms