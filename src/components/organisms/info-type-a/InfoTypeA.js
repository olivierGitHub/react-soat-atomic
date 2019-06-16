import React from 'react';
import InfoText from '../../molecules/info-text/InfoText';
import InfoPicture from '../../molecules/info-picture/InfoPicture';
import './css/info-type-a.css';


function InfoTypeA(props) {
  return (
        <div className="container type-a-container">
          <h1>{props.mainTitle}</h1>
          <div className="row">
            <div className="col-sm-4 type-a-info">
              <InfoText title={props.title1}
                        description={props.description1}>
              </InfoText>
            </div>
            <div className="col-sm-4">
              <InfoPicture description={props.description2}
                        src={props.src}
                        alt={props.alt} />
            </div>
            <div className="col-sm-4 type-a-info">
              <InfoText title={props.title3}
                        description={props.description3}>
              </InfoText>
            </div>
          </div>
        </div>
  );
}

export default InfoTypeA;
