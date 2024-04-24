import { useEffect } from "react"
import NavBarBox from "../components/NavBarBox"
import { Box, IconButton, Typography, Container } from "@mui/material"
import BottomBarBox from "../components/BottomBarBox"
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Rooms(){

    useEffect(() => {
        document.body.style.backgroundColor = "white"
    }, [])

    const comodos = [{nome: "Comodo"}, {nome: "Cozinha"}]

    return(
        <>
        <Container sx={{display: "flex", flexDirection: "row"}}>
            <NavBarBox title="TITULO AQUI" />
            <Box sx={{display: "flex", flexDirection : "column", justifyContent: "flex-start",  marginLeft: "30px", position: "absolute", top: "150px"}}>
                {comodos.map((comodo, index) => (
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <Typography variant="h6" sx={{color: "secondary.main"}}> (N)</Typography> 
                    <IconButton aria-label="Add" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "primary.contrastText"}}> {comodo.nome} </Typography>                    
                    </Box>
                ))}
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <IconButton aria-label="Add" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "secondary.light"}}> Novo Cômodo </Typography>                    
                </Box>
            </Box>
        </Container>
            <BottomBarBox tasks="tarefasPendentes"></BottomBarBox>
        </>
    )
}


export default Rooms