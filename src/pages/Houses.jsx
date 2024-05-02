import { Container, Box, AppBar, Typography, Toolbar, Button, IconButton, Paper  } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarBox from "../components/NavBarBox";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomBarBox from "../components/BottomBarBox";
import { LoginContext } from "../context/LoginContext";
import { HouseContext } from "../context/HouseContext"
import { TaskContext } from "../context/TaskContext"

function Houses(){

    const { loginInfo } = useContext(LoginContext)

    const { houses } = useContext(HouseContext)

    const { tasks } = useContext(TaskContext)

    const [countTasks, setCountTasks] = useState(0)

    const [userHouses, setUserHouses] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if(loginInfo){            
            document.body.style.backgroundColor = "white"
            setUserHouses(houses.filter(house => house.id_user === loginInfo.id))
            
            setCountTasks(tasks.filter(task => task.id_user === loginInfo.id && !task.done).length)
        }
        else{
            navigate("/")
        }
        
    }, [])

    return(
        <>{ loginInfo &&
        <Container sx={{display: "flex", flexDirection: "row", }}>
            <NavBarBox title={`Casas de ${loginInfo.user}`}/>
            <Box sx={{display: "flex", flexDirection : "column", justifyContent: "flex-start",  marginLeft: "30px", position: "absolute", top: "150px"}}>
            {userHouses &&
                userHouses.map((casa, index) => (
                    <Box key={index} sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <Typography key={index} variant="h5" sx={{color: "primary.contrastText"}}>{casa.id}: <Link style={{color: 'black', fontWeight: 'bold'}}to={`/rooms/${casa.id}`}>{casa.name}</Link> ({casa.address})</Typography>
                    </Box>
                ))
            }
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <IconButton onClick={() => navigate("/addHouse")} aria-label="Add a house" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "secondary.light"}}> Nova Casa </Typography> 
                </Box>
            </Box>
        </Container>
        }
            <BottomBarBox tasks={countTasks}></BottomBarBox>
        </>
    )
}

export default Houses