import { Box, Button, Container } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate } from "react-router-dom"
import RedirectButton from "../components/RedirectButton"


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

                <RedirectButton onClick={() => {
                    navigate("/register")
                }}>
                    Registre-se
                </RedirectButton>
                
                <RedirectButton onClick={() => {
                    navigate("/login")
                }}>
                    Faça Login
                </RedirectButton>

            </Box>
        </Container>
    )
}

export default HomeWithMUI