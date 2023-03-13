import OptionList from "./OptionList";
import SelectedOption from "./SelectedOption";

function ColorOptions(props){
    return(
        <div className="css-color-options">
            <h1>CSS Color Options</h1>
            <div className="color-options">
                <OptionList updateSelectedColor={props.updateSelectedColor}/>
                <SelectedOption addPaletteColor={props.addPaletteColor} selectedColor={props.selectedColor}/> 
            </div>
           
        </div>
        
    )
}
export default ColorOptions