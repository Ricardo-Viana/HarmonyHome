import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const RedirectLink = styled(Link)(({theme}) => ({
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
    '&:hover':{
        color: theme.palette.secondary.dark,
    }
}));

export default RedirectLink