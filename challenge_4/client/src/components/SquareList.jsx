import React from 'react';
import Square from './Square.jsx';
  const SquareList = (props) => {
  return (
    <div className="SquareList">
      {
        props.initialBoard.map((cell, index) => { 
          return <Square 
            value={cell} 
            position={index}
            key={index} />
        })
      }
    </div>
  )
} 
export default SquareList; 
