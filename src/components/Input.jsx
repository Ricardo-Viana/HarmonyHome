import './styles/Input.css'

function Input(props){
    return(
        <>
            <input className="inputBox" placeholder={props.placeholder}></input>
        </>
    )
}

export default Input