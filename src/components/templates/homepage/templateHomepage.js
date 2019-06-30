import React, { Component } from 'react';
import Navbar from '../../organisms/navbar/Navbar';
import Footer from '../../organisms/footer/Footer';
import InfoTypeA from '../../organisms/info-type-a/InfoTypeA';

function TemplateHomepage(props) {


    return (
        <React.Fragment>
          <Navbar />
          <InfoTypeA mainTitle={props.mainTitle}
                    title1={props.title1}
                    description1={props.description1}
                    src={props.src}
                    description2={props.description2}
                    title3={props.title3}
                    description3={props.description3} />
          <Footer />
        </React.Fragment>
      )

}

export default TemplateHomepage;

