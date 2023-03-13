
function Option(props){
    
    return(
        <li className="color-option">
            <div onClick={()=>props.updateSelectedColor(props.color)} className="color" style={{background:props.color}}></div>
            <p>{props.color}</p>
        </li>
    )
}
export default Option
