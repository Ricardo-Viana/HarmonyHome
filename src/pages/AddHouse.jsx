import { Box, Button, Container, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate } from "react-router-dom"
import RedirectButton from "../components/RedirectButton"
import SubmitButton from "../components/SubmitButton"

function AddHouse(){
    return(
    <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", gap: 5, height:"75vh", alignItems: "center", justifyContent: "center"}}>
        <Box
            sx={{display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",}} >
                <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo}/>
        </Box>
        <form style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
            <Box sx={{display: "flex", flexDirection: "column", gap: 5, alignContent: "center",}}>
                <Typography variant="h4" sx={{color: "primary.contrastText"}}>Adicionar nova casa</Typography>
                <TextField label="Apelido da casa" required/>
                <TextField label="Endereço" required/>
                <SubmitButton type="submit">Adicionar</SubmitButton>
            </Box>
        </form>

    </Container>
    )
}

export default AddHouse