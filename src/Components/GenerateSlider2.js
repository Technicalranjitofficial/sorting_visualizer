import React, { useState } from 'react'
import { Slider } from '@mui/material'
import { generateArray } from '../Functions/GenerateArray';

const GenerateSlider2 = ({updateArray,setSorted,val,setVal,setisSorting,isSorting}) => {

  const [speed,setSpeed] = useState(5);
  return (
   <div className='Slider_container2'>
    <p className='slider_title'>Generate</p>
     <div className="slider2">
     
     <Slider disabled={isSorting} value={val} onChange={(e,value)=>{
        setVal(value);
        generateArray(updateArray,setSorted,val,setisSorting)
     }} max={200} min={50} aria-label="Default" valueLabelDisplay="auto" color='secondary' />
     </div>
     </div>
  )
}

export default GenerateSlider2
