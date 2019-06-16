import React from 'react';
import Title from '../../atoms/title/Title';
import TheImage from '../../atoms/image/TheImage';
import Description from '../../atoms/description/Description';
import TheButton from '../../atoms/button/TheButton';


function InfoPicture(props) {
  return (
        <React.Fragment>
          <TheImage src={props.src} alt={props.alt} />
          {
            props.title && <Title text={props.title} />
          }
          <Description text={props.description} />
          {
            props.buttonText && <TheButton buttonText={props.buttonText} />
          }
        </React.Fragment>
  );
}

export default InfoPicture;
