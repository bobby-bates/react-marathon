import React from 'react';

const Song = (props) => {

  return(
    <div>
      <li className= {props.className}>
        {props.name} - {props.artist}
      </li>
    </div>
  )
}





export default Song;
