import React from 'react';
import InfoText from '../../molecules/info-text/InfoText';
import PictureGif from '../../molecules/picture-gif/PictureGif';
import './css/info-type-b.css';


function InfoTypeB(props) {
  return (
        <div className="container type-b-container">
          <div className="row">
            <div className="col-sm-6 type-b-info">
              <InfoText title={props.title}
                        description={props.description}
                        additionalDescription={props.additionalDescription}
                        buttonText={props.buttonText}>
              </InfoText>
            </div>
            <div className="col-sm-6">
              <PictureGif src={props.src} />
            </div>
          </div>
        </div>
  );
}

export default InfoTypeB;
