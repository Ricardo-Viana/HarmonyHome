import { Box, Button, Container } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate } from "react-router-dom"


function HomeWithMUI(){
    const navigate = useNavigate()

    return (
        <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", gap: 7,}}>
            
            <Box
            sx={{display: "flex",
                justifyContent: "center",
                height: 150,}} >
                <img style={{height: "200px" }} className="logo" src={harmonyHomeLogo}/>
            </Box>

            <Box
            sx={{display: "flex",
                flexDirection: "column",
                gap: 5,}} >
                <Button sx={{color: "primary.contrastText",
                fontFamily: "'Poppins', Arial",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "-px",
                lineHeight: "auto",
                textAlign: "center",
                backgroundColor: "primary.light",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "0px",}} onClick={() => {
                    navigate("/register")
                }}>Registre-se</Button>

                <Button sx={{color: "primary.contrastText",
                fontFamily: "'Poppins', Arial",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "-px",
                lineHeight: "auto",
                textAlign: "center",
                backgroundColor: "primary.light",
                borderRadius: "50px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                padding: "0px",}} onClick={() => {
                    navigate("/login")
                }}>Faça Login</Button>

            </Box>
        </Container>
    )
}

export default HomeWithMUI