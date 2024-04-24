import { Box, Typography } from "@mui/material"

const BottomBarBox = (props) => {
    return(
        <Box sx={{ backgroundColor: 'primary.main',
                position: 'fixed',
                bottom: 15,
                left: '50%',
                transform: 'translateX(-50%)',
                height: '115px',
                width: '190vh',
                borderRadius: '40px', 
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="h3" color={"black"}>Tarefas pendentes: {props.tasks}</Typography>
            </Box>
    )
}

export default BottomBarBox