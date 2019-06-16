import React from 'react';

function TheInput(props) {
  return (
      <input className={props.className} name={props.name} type={props.type} placeholder={props.placeholder} />
    )
}

export default TheInput;
