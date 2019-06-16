import React from 'react';
import TheImage from '../../atoms/image/TheImage';
import Description from '../../atoms/description/Description';


function PictureGif(props) {
  return (
        <React.Fragment>
          <TheImage src={props.src} alt={props.alt} />
          {
            props.description && <Description text={props.description} />
          }
        </React.Fragment>
  );
}

export default PictureGif;
