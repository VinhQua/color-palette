import logo from './logo.svg';
import './App.css';
import ColorOptions from './ColorOptions/ColorOptions';
import { useEffect, useState } from 'react';
import Palette from './Pallete';


function App() {
  const [state,setState] = useState(()=>{
    return JSON.parse(localStorage.getItem('stateString')) ||
    {selectedColor:"AntiqueWhite",
                                    selectedColors:['Azure','AntiqueWhite']
    }
  } )
  const updateSelectedColor =(color)=>{
    setState(CurState=>({
      ...CurState,
      selectedColor:color
    }))
    console.log(state)
  }
  useEffect(()=>{
    localStorage.setItem('stateString',JSON.stringify(state))
  },[state])
  const addPaletteColor =(color)=>{
    if (state.selectedColors.includes(color)) return;
    const paleteColors = [...state.selectedColors,color];
    setState(curState=>({
      ...curState,
      selectedColors:paleteColors
    }))
  }
  const deleteColor = (delColor)=>{
    const paleteColors = state.selectedColors.filter(color => color !== delColor )
    setState(curState=>({
      ...curState,
      selectedColors:paleteColors
    }))
  }
  return (
    <div className="App">
      <Palette deleteColor={deleteColor} selectedColors={state.selectedColors}/>
      <ColorOptions addPaletteColor={addPaletteColor} updateSelectedColor={updateSelectedColor} selectedColor={state.selectedColor}/>
    </div>
  );
}

export default App;
