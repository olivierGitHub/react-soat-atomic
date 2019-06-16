import React from 'react';
import InfoPicture from '../../molecules/info-picture/InfoPicture';
import './css/info-type-c.css';


function InfoTypeC(props) {
  return (
        <div className="container type-c-container">
          <h1>{props.mainTitle}</h1>
          <div className="row">
            <div className="col-sm-4">
              <InfoPicture title={props.title1}
                          description={props.description1}
                          src={props.src1}
                          alt={props.alt1}
                          buttonText={props.buttonText1} />
            </div>
            <div className="col-sm-4">
              <InfoPicture title={props.title2}
                          description={props.description2}
                          src={props.src2}
                          alt={props.alt2}
                          buttonText={props.buttonText2} />
            </div>
            <div className="col-sm-4">
              <InfoPicture title={props.title3}
                          description={props.description3}
                          src={props.src3}
                          alt={props.alt3}
                          buttonText={props.buttonText3} />
            </div>
          </div>
        </div>
      );
}

export default InfoTypeC;
