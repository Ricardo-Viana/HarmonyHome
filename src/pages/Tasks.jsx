import { useEffect } from "react"
import NavBarBox from "../components/NavBarBox"
import { Box, Typography, Container, Checkbox, IconButton } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomBarBox from "../components/BottomBarBox"

function Tasks(){

    useEffect(() => {
        document.body.style.backgroundColor = "white"
    }, [])

    const tasks = [{nome: "Tarefa1"}, {nome: "Tarefa2"}, {nome : "Tarefa3"}]

    return(
        <>
         <Container sx={{display: "flex", flexDirection: "row", }}>
            <NavBarBox title="TITULO AQUI"/>
            <Box sx={{display: "flex", flexDirection : "column", justifyContent: "flex-start",  marginLeft: "30px", position: "absolute", top: "150px"}}>
                {tasks.map((task, index) => (
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <Checkbox
                        inputProps={{ 'aria-label': 'controlled' }} 
                        sx={{color: "primary.contrastText", '&.Mui-checked': {
                            color: "secondary.main"
                        }}}
                        />
                    <Typography variant="h6" sx={{color: "primary.contrastText"}}> {task.nome} </Typography>                    
                    </Box>
                ))}
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center",  gap: 0.5}}>
                    <IconButton aria-label="Add" sx={{color: "primary.contrastText"}}>
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{color: "secondary.light"}}> Nova Task </Typography>                    
                </Box>
            </Box>
        </Container>
        <BottomBarBox tasks="tarefasPendentes"></BottomBarBox>
        </>
    )
}

export default Tasks