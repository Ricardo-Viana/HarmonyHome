import { Box, AppBar, Toolbar, Button, IconButton, Typography, Menu, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import harmonyHomeLogo from '../assets/Harmony_Home_Logo.png';
import Avatar from '@mui/material/Avatar'
import avatar from '../assets/ProfilePicture.jpeg';
import React, { useContext, useState } from 'react';
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const NavBarBox = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { setLoginInfo } = useContext(LoginContext)

    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setLoginInfo(null)
        navigate("/")
    }

    const handleRedirectHouses = () => {
        navigate("/houses")
    }

    return (
        <Box>
            <AppBar>
                <Toolbar sx={{ backgroundColor: "primary.main" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick} // Adicionando o evento de clique
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        <MenuItem onClick={handleRedirectHouses}>Casas</MenuItem>
                    </Menu>
                    <img style={{ height: "100px" }} className="logo" src={harmonyHomeLogo} alt="Logo" />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, justifyContent: "center", }}>
                        {props.title}
                    </Typography>
                    <Button color="inherit"><Avatar alt="Melhor do Momento" src={avatar} /></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBarBox