import { Container, Box, TextField, Typography } from "@mui/material"
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
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [userError, setUserError] = useState("")
    const [confirmationPasswordError, setConfirmationPasswordError] = useState("")

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = (event) =>{
        event.preventDefault()

        const formData = {
            id: registrationInfo.length,
            email: email,
            user: user,
            password: password,
        }

        setEmailError("");
        setPasswordError("");
        setUserError("");
        setConfirmationPasswordError("");

        if(emailRegex.test(email) && password !== '' && user !== '' && password === confirmationPassword && !registrationInfo.some(info => info.email === email)){
            setRegistrationInfo([...registrationInfo, formData])
            navigate("/login")
        }
        else{
            if (!emailRegex.test(email)) {
                setEmailError("Email inválido");
            }
            if (password === '') {
                setPasswordError("Senha não pode estar vazia");
            }
            if (user === '') {
                setUserError("Nome de usuário não pode estar vazio");
            }
            if (password !== confirmationPassword) {
                setConfirmationPasswordError("As senhas não coincidem");
            }
            if (registrationInfo.some(info => info.email === email)) {
                setEmailError("Este email já está em uso");
            }
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
            <TextField onChange={(e) => {setUser(e.target.value)}} label="Usuário" required error={userError !== ''}/>
            {userError && <Typography variant="caption" color="error">{userError}</Typography>}              
            <TextField onChange={(e) => {setEmail(e.target.value)}} label="Email" required error={emailError !== ''}/>
            {emailError && <Typography variant="caption" color="error">{emailError}</Typography>}
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignContent: "center",}}>
                <TextField onChange={(e) => {setPassword(e.target.value)}} label="Senha" type="password" required error={passwordError !== ''}/>
                {passwordError && <Typography variant="caption" color="error">{passwordError}</Typography>}
                <TextField onChange={(e) => {setConfirmationPassword(e.target.value)}} label="Confirmar Senha" type="password" required error={confirmationPasswordError !== ''}/>
                {confirmationPasswordError && <Typography variant="caption" color="error">{confirmationPasswordError}</Typography>}
                <SubmitButton type="submit" >Registrar-se</SubmitButton>
            </Box>
        </form>
        <Box sx={{marginTop: -2}}>
            <RedirectLink to="/login">Já sou registrado</RedirectLink>
        </Box>

    </Container>
    )
}
export default Register
