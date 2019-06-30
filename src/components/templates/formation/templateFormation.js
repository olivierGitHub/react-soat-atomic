import React, { Component } from 'react';
import Navbar from '../../organisms/navbar/Navbar';
import Footer from '../../organisms/footer/Footer';
import InfoTypeB from '../../organisms/info-type-b/InfoTypeB';

function TemplateFormation(props) {

  return (
        <React.Fragment>
          <Navbar />
          <InfoTypeB title={props.title}
                    description={props.description}
                    additionalDescription={props.additionalDescription}
                    src={props.src}
                    buttonText={props.buttonText} />
          <Footer />
        </React.Fragment>
      )

}

export default TemplateFormation;
