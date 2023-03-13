import Heart from "./Heart"

function SelectedOption(props){
    return(
        <div onClick={()=> props.addPaletteColor(props.selectedColor)} className="selected-option" style={{background:props.selectedColor}}>
            <Heart/>
        </div>
    )
}
export default SelectedOption