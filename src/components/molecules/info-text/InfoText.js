import React from 'react';
import Title from '../../atoms/title/Title';
import Description from '../../atoms/description/Description';
import TheButton from '../../atoms/button/TheButton';


function InfoText(props) {
  return (
        <React.Fragment>
          <Title text={props.title} />
          <Description text={props.description} />
          {
            props.additionalDescription && <Description text={props.additionalDescription} />
          }
          {
            props.buttonText && <TheButton buttonText={props.buttonText} />
          }
        </React.Fragment>
  );
}

export default InfoText;
