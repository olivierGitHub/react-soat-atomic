import React, { Component } from 'react';
import Navbar from '../../organisms/navbar/Navbar';
import Footer from '../../organisms/footer/Footer';
import InfoTypeC from '../../organisms/info-type-c/InfoTypeC';

function TemplatePartage(props) {

    return (
        <React.Fragment>
          <Navbar />
          <InfoTypeC mainTitle={props.mainTitle}
                    title1={props.title1}
                    description1={props.description1}
                    src1={props.src1}
                    buttonText1={props.buttonText1}
                    title2={props.title2}
                    description2={props.description2}
                    src2={props.src2}
                    buttonText2={props.buttonText2}
                    title3={props.title3}
                    description3={props.description3}
                    src3={props.src3}
                    buttonText3={props.buttonText3} />
          <Footer />
        </React.Fragment>
      )
}

export default TemplatePartage;
