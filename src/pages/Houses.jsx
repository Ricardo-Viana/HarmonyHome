import { Container, Box, AppBar, Typography, Toolbar, Button, IconButton, Paper  } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarBox from "../components/NavBarBox";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomBarBox from "../components/BottomBarBox";
import { LoginContext } from "../context/LoginContext";
import { HouseContext } from "../context/HouseContext"


function Houses(){

    const loginInfo = useContext(LoginContext)

    const { houses } = useContext(HouseContext)

    const [userHouses, setUserHouses] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if(loginInfo){            
            document.body.style.backgroundColor = "white"
            setUserHouses(houses.filter(house => house.id_user === loginInfo.id))
        }
        else{
            navigate("/")
        }
        
    }, [])

    return(
        <>{ loginInfo &&
        <Container sx={{display: "flex", flexDirection: "row", }}>
            <NavBarBox title={`Casas de ${loginInfo.user}`}/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: "30px", position: "absolute", top: "150px"}}>
            {userHouses &&
                userHouses.map((casa, index) => (
                    <Typography key={index} variant="h5" sx={{color: "primary.contrastText"}}>{casa.id}: <Link style={{color: "primary.contrastText"}} to={`/rooms/${casa.id}`}>{casa.name}</Link> ({casa.address})</Typography>
                ))
            }
                <IconButton onClick={() => navigate("/addHouse")} aria-label="Add a house" sx={{color: "secondary.light"}}>
                <AddCircleIcon /> Nova Casa
                </IconButton>
            </Box>
        </Container>
        }
            <BottomBarBox tasks="tarefasPendentes"></BottomBarBox>
        </>
    )
}

export default Houses