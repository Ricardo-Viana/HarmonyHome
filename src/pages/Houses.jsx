import { Container, Box, AppBar, Typography, Toolbar, Button, IconButton, ThemeProvider  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarBox from "../components/NavBarBox";


function Houses(){

    useEffect(() => {
        document.body.style.backgroundColor = "white"
    }, [])

    const casas = [{nome: "Casa1", endereco: "Rua Tal" }, {nome: "Casa2", endereco: "Rua Tel" }, {nome: "Casa3", endereco: "Rua Til" }]

    return(
        <Container sx={{display: "flex", flexDirection: "row"}}>
            <NavBarBox title="TITULO AQUI"/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "300px", marginLeft: "30px" , position: "fixed"}}>
            {casas.map((casa, index) => (
                <Typography variant="h5" ><Link > {index + 1}: {casa.nome} ({casa.endereco})</Link> </Typography>
            ))}
            </Box>
        </Container>
    )
}

export default Houses