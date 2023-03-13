import PaletteColor from "./PalletteColor"
function Palette(props){
    //console.log(props.deleteColor)
    const colors = props.selectedColors.map(color=> <PaletteColor deleteColor={props.deleteColor} color={color} key={color} />)
    return(
        <div className="pallete">
            <h1>Color Palette</h1>
            <ul  className="selected-color-list">{colors}</ul> 
        </div>
        
    )
}
export default Palette