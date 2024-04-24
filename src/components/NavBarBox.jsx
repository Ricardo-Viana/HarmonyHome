import { Box, AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import harmonyHomeLogo from '../assets/Harmony_Home_Logo.png';


const NavBarBox = (props) => {
    return(
    <Box >
    <AppBar>
        <Toolbar sx={{backgroundColor: "primary.main"}}>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <img style={{height: "100px" }} className="logo" src={harmonyHomeLogo}/>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, justifyContent: "center", }}>
            {props.title}
        </Typography>
        <Button color="inherit">IMAGEM </Button>
        </Toolbar>
    </AppBar>
    </Box>
    )
}

export default NavBarBox