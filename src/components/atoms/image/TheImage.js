import React from 'react';

function TheImage(props) {
  return (
        <img className={props.className} src={props.src} alt="the image" />
  );
}

export default TheImage;
