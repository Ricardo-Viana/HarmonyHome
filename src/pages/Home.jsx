import harmonyHomeLogo from "../assets/Harmony_Home_Logo.png"
import "./styles/Home.css"
import { useNavigate } from "react-router-dom"


function Home(){

    const navigate = useNavigate()

    const handleRedirect = (link) => {
        navigate(link)
    }

    return(
        <>
            <div className="container">
                <div className="harmonyHomeLogo">
                    <img className="logo" src={harmonyHomeLogo}/>
                </div>
                <div className="buttons">
                    <button className="redirectButtonBox" onClick={() => handleRedirect("/register")}>Registre-se</button>
                    <button className="redirectButtonBox" onClick={() => handleRedirect("/login")}>Faça Login</button>
                </div>
            </div>
        </>
    )
}

export default Home