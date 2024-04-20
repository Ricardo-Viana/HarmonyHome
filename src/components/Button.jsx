import './styles/Button.css'

function Button(props){
    return(
        <>
            <button className="buttonBox" >{props.placeholder}</button>
        </>
    )
}

export default Button