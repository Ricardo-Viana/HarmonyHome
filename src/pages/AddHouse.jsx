import { Box, Button, Container, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate } from "react-router-dom"
import RedirectButton from "../components/RedirectButton"
import SubmitButton from "../components/SubmitButton"
import { useContext, useEffect, useState } from "react"
import { HouseContext } from "../context/HouseContext"
import { LoginContext } from "../context/LoginContext"


function AddHouse(){

    const loginInfo = useContext(LoginContext)

    const {houses, setHouses} = useContext(HouseContext)

    const [houseName, setHouseName] = useState("")
    const [houseAddress, setHouseAddress] = useState("")

    const navigate = useNavigate()

    useEffect(() =>{
        if(loginInfo){

        }
        else{
            navigate("/")
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        if(houseName !== '' && houseAddress !== ''){
            const houseFilter = houses.filter(house => house.id_user === loginInfo.id)
            const newHouse = {
                id_user: loginInfo.id,
                id: houseFilter.length + 1,
                name: houseName,
                address: houseAddress,
            }
            setHouses(prevHouses => [...prevHouses, newHouse])
            navigate("/houses")
        }
        else{
            alert("ERRADO")
        }
    }

    return(
    <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", gap: 5, height:"75vh", alignItems: "center", justifyContent: "center"}}>
        <Box
            sx={{display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",}} >
                <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo}/>
        </Box>
        <form onSubmit={(e) => handleSubmit(e)} style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
            <Box sx={{display: "flex", flexDirection: "column", gap: 5, alignContent: "center",}}>
                <Typography variant="h4" sx={{color: "primary.contrastText"}}>Adicionar nova casa</Typography>
                <TextField onChange={(e) => setHouseName(e.target.value)} label="Apelido da casa" required/>
                <TextField onChange={(e) => setHouseAddress(e.target.value)} label="Endereço" required/>
                <SubmitButton type="submit">Adicionar</SubmitButton>
            </Box>
        </form>

    </Container>
    )
}

export default AddHouse