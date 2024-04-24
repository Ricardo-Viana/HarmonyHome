import { Container, Box, TextField, Button } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import SubmitButton from "../components/SubmitButton"
import { Link } from "react-router-dom"
import RedirectLink from "../components/RedirectLink"

function Register(){

    return(
    <Container sx={{display: "flex", flexDirection: "column", color: "primary.main",alignContent: "center", gap: 3,}}>
        
        <form style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
            <Box
                sx={{display: "flex",
                    justifyContent: "center",
                    height: "auto",}} >
                    <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo}/>
                </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignContent: "center",}}>
                <TextField label="Nome" required/>
                <TextField label="Email" required/>
                <TextField label="Usuário" required/>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignContent: "center",}}>
                <TextField label="Senha" required/>
                <TextField label="Confirmar Senha" required/>
                <SubmitButton type="submit">Registrar-se</SubmitButton>
            </Box>
        </form>
        <Box sx={{marginTop: -2}}>
            <RedirectLink to="/login">Já sou registrado</RedirectLink>
        </Box>

    </Container>
    )
}
export default Register