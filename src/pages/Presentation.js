import React, { Component } from 'react';
import Navbar from '../components/organisms/navbar/Navbar';
import Footer from '../components/organisms/footer/Footer';
import InfoTypeB from '../components/organisms/info-type-b/InfoTypeB';

class Presentation extends Component {

  render() {
    return (
        <React.Fragment>
          <Navbar />
          <InfoTypeB title="Présentons-nous"
                    description="SOAT, ce sont 360 consultants IT et coachs agiles qui développent un cercle vertueux entre connaissances et réalisations techniques pour transformer positivement vos organisations."
                    src="https://www.soat.fr/sites/default/files/paragraph/header/170519_soat_gif_05_presentons_ae.gif"
                    buttonText="en savoir plus" />
          <Footer />
        </React.Fragment>
      )
  }
}

export default Presentation;
