import React from 'react';

const Square =(props) => { 
  // const buttonStyle = {
  //   backgroundColor: '#303030',
  //   color:'#50C8FF',
  //   height: '30px',
  //   width: '100px',
  //   borderRadius: '5px',
  //   margin: '0 auto',
  //   marginBottom: '25px',
  //   textAlign: 'center',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   cursor: 'pointer' ,
  //   transition: 'background-color 0.5s, color 0.5s'
  // }
  return (
    <button className="square" >
      {props.value}
    </button>
  )
}

export default Square; 