import React from 'react'

const Bar = ({arr,val,index}) => {
    let width = window.innerWidth;
  return (
    <div>
     <div className="box" style={{height:val['val'],width:(width/arr.length)*0.98,backgroundColor:val['col']}}>
     </div>
    </div>
  )
}

export default Bar
