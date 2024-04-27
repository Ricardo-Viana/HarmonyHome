import { Container, Box, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import SubmitButton from "../components/SubmitButton"
import RedirectLink from "../components/RedirectLink"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisteredContext } from "../context/RegisteredContext"

function Login(){

    const {registrationInfo, setLoginInfo} = useContext(RegisteredContext)

    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        setPasswordError("");
        setUserError("");

        if (password === '' || user === '') {
            if(password === ''){
                setPasswordError("Senha não pode estar vazia");
            }
            if(user === ''){
                setUserError("Nome de usuário não pode estar vazio")
            }
        }else{
            const foundUser = registrationInfo.find(registration => registration.user === user && registration.password === password);
            if(foundUser){
                setLoginInfo({id: foundUser.id, user: foundUser.user})
                navigate("/houses")
            }
            else{
                setPasswordError("Usuário não encontrado")
                setUserError("Usuário não encontrado")
            }
        }    
        
    }

    return(
        <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", alignItems: "center", justifyContent: "center", gap: 3}}>
            
            <form onSubmit={(e) => handleSubmit(e)} style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
                <Box
                    sx={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "auto"}}>
                    <img style={{height: "150px"}} className="logo" src={harmonyHomeLogo} alt="Logo"/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignContent: "center"}}>
                    <TextField onChange={(e) => setUser(e.target.value)} label="Usuário" required error={userError !== ''}/>
                    {userError && <Typography variant="caption" color="error">{userError}</Typography>}              
                    <TextField onChange={(e) => setPassword(e.target.value)} label="Senha" type="password" required error={passwordError !== ''}/>
                    {passwordError && <Typography variant="caption" color="error">{passwordError}</Typography>}
                    <SubmitButton type="submit">LOGIN</SubmitButton>
                </Box>
            </form>
            <Box sx={{marginTop: -2}}>
                <RedirectLink to="/register">Não tenho conta</RedirectLink>
            </Box>
        </Container>
    )
}

export default Login
