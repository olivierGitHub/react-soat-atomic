import React from 'react';
import Title from '../../atoms/title/Title';
import TheImage from '../../atoms/image/TheImage';
import Description from '../../atoms/description/Description';
import TheButton from '../../atoms/button/TheButton';
import "./css/info-picture.css";


function InfoPicture(props) {
  return (
        <React.Fragment>
          <TheImage src={props.src} className="soat-photo" />
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
