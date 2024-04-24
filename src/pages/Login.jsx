import { Container, Box, TextField} from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import SubmitButton from "../components/SubmitButton"
import RedirectLink from "../components/RedirectLink"


function Login(){
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
                    <TextField label="Usuário" required/>
                    <TextField label="Senha" required />
                    <SubmitButton>LOGIN</SubmitButton>
                </Box>
    
            </form>
            <Box sx={{marginTop: -2}}>
                <RedirectLink to="/register">Não tenho conta</RedirectLink>
            </Box>
    
        </Container>
        )
}

export default Login