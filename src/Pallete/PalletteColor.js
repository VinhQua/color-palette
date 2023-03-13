
function PaleteColor(props){
    return(
        <li className="palette-color">
            <div className="chosen-color" style={{backgroundColor:props.color}} ></div>
            <div className="chosen-color-text">
               <p>{props.color}</p>
                <span onClick={()=> props.deleteColor(props.color)} className="delete-chosen-color">x</span> 
            </div>
            
        </li>        
    )
}
export default PaleteColor