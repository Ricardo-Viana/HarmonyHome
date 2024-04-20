import './styles/HightlightedText.css'
import { Link } from 'react-router-dom'

function HighlightedText(props){
    return(
        <div className="label">
            <div className="text-wrapper">{props.text}</div>
        </div>
    )
}

export default HighlightedText