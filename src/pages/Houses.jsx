import { Container, Box, AppBar, Typography, Toolbar, Button, IconButton, Paper  } from "@mui/material"
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarBox from "../components/NavBarBox";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomBarBox from "../components/BottomBarBox";


function Houses(){

    useEffect(() => {
        document.body.style.backgroundColor = "white"
    }, [])

    const casas = [{nome: "Casa1", endereco: "Rua Tal" }, {nome: "Casa2", endereco: "Rua Tel" }, {nome: "Casa3", endereco: "Rua Til" },]

    return(
        <>
        <Container sx={{display: "flex", flexDirection: "row", }}>
            <NavBarBox title="TITULO AQUI"/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: "30px", position: "absolute", top: "150px"}}>
            {casas.map((casa, index) => (
                <Typography variant="h5" sx={{color: "black"}}>{index + 1}: <Link style={{color: "black"}} >{casa.nome}</Link> ({casa.endereco})</Typography>
            ))}
                <IconButton aria-label="Add" sx={{color: "secondary.light"}}>
                <AddCircleIcon /> Nova Casa
                </IconButton>
            </Box>
        </Container>
            <BottomBarBox tasks="tarefasPendentes"></BottomBarBox>
        </>
    )
}

export default Houses