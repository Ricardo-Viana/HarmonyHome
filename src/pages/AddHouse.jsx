import { Box, Container, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { HouseContext } from "../context/HouseContext"
import { LoginContext } from "../context/LoginContext"
import SubmitButton from "../components/SubmitButton"

function AddHouse(){

    const loginInfo = useContext(LoginContext)
    const {houses, setHouses} = useContext(HouseContext)
    const navigate = useNavigate()

    const [houseName, setHouseName] = useState("")
    const [houseAddress, setHouseAddress] = useState("")
    const [houseNameError, setHouseNameError] = useState("")
    const [houseAddressError, setHouseAddressError] = useState("")

    useEffect(() =>{
        if(!loginInfo){
            navigate("/")
        }
    }, [loginInfo, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()

        setHouseNameError("")
        setHouseAddressError("")

        if(houseName.trim() === ''){
            setHouseNameError("Apelido da casa não pode estar vazio")
        }
        if(houseAddress.trim() === ''){
            setHouseAddressError("Endereço da casa não pode estar vazio")
        }

        if(houseName.trim() !== '' && houseAddress.trim() !== ''){
            const houseFilter = houses.filter(house => house.id_user === loginInfo.id)
            const newHouse = {
                id_user: loginInfo.id,
                id: houseFilter.length + 1,
                name: houseName.trim(),
                address: houseAddress.trim(),
            }
            setHouses(prevHouses => [...prevHouses, newHouse])
            navigate("/houses")
        }
    }

    return(
        <Container sx={{display: "flex", flexDirection: "column", color: "primary.main", gap: 5, height:"75vh", alignItems: "center", justifyContent: "center"}}>
            <Box
                sx={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",}} >
                    <img style={{height: "150px" }} className="logo" src={harmonyHomeLogo} alt="Logo"/>
            </Box>
            <form onSubmit={(e) => handleSubmit(e)} style={{ display:"flex", flexDirection:"column", gap: '2rem' }} noValidate autoComplete="off">
                <Box sx={{display: "flex", flexDirection: "column", gap: 5, alignContent: "center"}}>
                    <Typography variant="h4" sx={{color: "primary.contrastText"}}>Adicionar nova casa</Typography>
                    <TextField onChange={(e) => setHouseName(e.target.value)} label="Apelido da casa" required error={houseNameError !== ''}/>
                    {houseNameError && <Typography variant="caption" color="error">{houseNameError}</Typography>}
                    <TextField onChange={(e) => setHouseAddress(e.target.value)} label="Endereço" required error={houseAddressError !== ''}/>
                    {houseAddressError && <Typography variant="caption" color="error">{houseAddressError}</Typography>}
                    <SubmitButton type="submit">Adicionar</SubmitButton>
                </Box>
            </form>
        </Container>
    )
}

export default AddHouse
