import React from 'react';
import TheImage from '../../atoms/image/TheImage';
import Description from '../../atoms/description/Description';
import './css/picture-gif.css';


function PictureGif(props) {
  return (
        <React.Fragment>
          <TheImage src={props.src} className="gif-size" />
          {
            props.description && <Description text={props.description} />
          }
        </React.Fragment>
  );
}

export default PictureGif;
