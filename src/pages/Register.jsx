import { Container, Box, TextField} from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import SubmitButton from "../components/SubmitButton"
import RedirectLink from "../components/RedirectLink"
import { useContext, useState } from "react"
import { RegisteredContext } from "../context/RegisteredContext"
import { useNavigate } from "react-router-dom"

function Register(){

    const {registrationInfo, setRegistrationInfo} = useContext(RegisteredContext)

    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmationPassword, setConfirmationPassword] = useState("")

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = (event) =>{
        event.preventDefault()

        const formData = {
            id: registrationInfo.length,
            email: email,
            user: user,
            password: password,
        }

        if(emailRegex.test(email) && password !== '' && user !== '' && password === confirmationPassword && !registrationInfo.some(info => info.email === email)){
            setRegistrationInfo([...registrationInfo, formData])
            navigate("/login")
        }
        else{
            alert("Errado")
        }
    }




    return(
    <Container sx={{display: "flex", flexDirection: "column", color: "primary.main",alignItems: "center", justifyContent: "center", gap: 3,}}>
        
        <form onSubmit={(e) => handleSubmit(e)} style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
            <Box
                sx={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",}} >
                    <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo}/>
                </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignContent: "center",}}>
            <TextField onChange={(e) => {setUser(e.target.value)}} label="Usuário" required/>                
            <TextField onChange={(e) => {setEmail(e.target.value)}} label="Email" required/>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignContent: "center",}}>
                <TextField onChange={(e) => {setPassword(e.target.value)}} label="Senha" required/>
                <TextField onChange={(e) => {setConfirmationPassword(e.target.value)}} label="Confirmar Senha" required/>
                <SubmitButton type="Submit" >Registrar-se</SubmitButton>
            </Box>
        </form>
        <Box sx={{marginTop: -2}}>
            <RedirectLink to="/login">Já sou registrado</RedirectLink>
        </Box>

    </Container>
    )
}
export default Register