import { styled, Button } from "@mui/material";

const SubmitButton = styled(Button)(({theme}) => ({
    color: theme.palette.secondary.contrastText,
    fontFamily: "'Poppins', Arial",
    fontSize: "17.5px",
    fontWeight: 300,
    letterSpacing: "2px",
    lineHeight: "auto",
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "0px",
    '&:hover':{
        color: theme.palette.secondary.dark
    }
}))

export default SubmitButton