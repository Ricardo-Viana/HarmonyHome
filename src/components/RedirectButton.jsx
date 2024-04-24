import { Button, styled } from "@mui/material";

const RedirectButton = styled(Button)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    fontFamily: "'Poppins', Arial",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "-1px",
    lineHeight: "auto",
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "50px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "0px",
    width: "350px",
    '&:hover':{
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    }
}));

export default RedirectButton