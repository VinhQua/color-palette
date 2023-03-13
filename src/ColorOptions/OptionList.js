import CSS_COLOR_NAMES from './data'
import colorsData from './data'
import Option from './Option'
function OptionList(props){

    const options = CSS_COLOR_NAMES.map(color => <Option updateSelectedColor={props.updateSelectedColor} key={color} color ={color}/>)
    //console.log(colorsData)
    return(
        <ul className='colors-list'>{options}</ul>
    )
}
export default OptionList