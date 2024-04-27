import { Box, Container, TextField, Typography } from "@mui/material"
import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { LoginContext } from "../context/LoginContext"
import { RoomContext } from '../context/RoomContext'
import SubmitButton from "../components/SubmitButton"

function AddRoom(){

    const loginInfo = useContext(LoginContext)
    const [roomName, setRoomName] = useState("")
    const {rooms, setRooms} = useContext(RoomContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const [roomNameError, setRoomNameError] = useState("")

    useEffect(() =>{
        if(!loginInfo){
            navigate("/")
        }
    }, [loginInfo, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()

        setRoomNameError("")

        if(roomName.trim() === ''){
            setRoomNameError("Nome do cômodo não pode estar vazio")
        }

        if(roomName.trim() !== ''){
            const roomFilter = rooms.filter(room => room.id_user === loginInfo.id && room.id_house === parseInt(id))
            const newRoom = {
                id_user: loginInfo.id,
                id_house: parseInt(id),
                id: roomFilter.length + 1,
                name: roomName.trim(),
            }
            setRooms(prevRooms => [...prevRooms, newRoom])
            navigate(`/rooms/${id}`)
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
                <Box sx={{display: "flex", flexDirection: "column", gap: 7, alignContent: "center"}}>
                    <Typography variant="h4" sx={{color: "primary.contrastText"}}>Adicionar novo cômodo</Typography>
                    <TextField onChange={(e) => setRoomName(e.target.value)} label="Nome do cômodo" required error={roomNameError !== ''}/>
                    {roomNameError && <Typography variant="caption" color="error">{roomNameError}</Typography>}
                    <SubmitButton type="submit">Adicionar</SubmitButton>
                </Box>
            </form>
        </Container>
    )
}

export default AddRoom
