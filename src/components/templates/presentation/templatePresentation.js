import React, { Component } from 'react';
import Navbar from '../../organisms/navbar/Navbar';
import Footer from '../../organisms/footer/Footer';
import InfoTypeB from '../../organisms/info-type-b/InfoTypeB';


function TemplatePresentation(props) {
    return (
        <React.Fragment>
          <Navbar />
          <InfoTypeB title={props.title}
                    description={props.description}
                    src={props.src}
                    buttonText={props.buttonText} />
          <Footer />
        </React.Fragment>
      )

}

export default TemplatePresentation;
