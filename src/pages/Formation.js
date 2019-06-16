import React, { Component } from 'react';
import Navbar from '../components/organisms/navbar/Navbar';
import Footer from '../components/organisms/footer/Footer';
import InfoTypeB from '../components/organisms/info-type-b/InfoTypeB';

class Formation extends Component {

  render() {
    return (
        <React.Fragment>
          <Navbar />
          <InfoTypeB title="Formons vos équipes"
                    description="Des formations en informatique pour monter en compétences sur les nouvelles technologies et les méthodes agiles, avec des formateurs gonflés à bloc !"
                    additionalDescription="Vous avez l’impression de courir après les évolutions technologiques ? D’être constamment dépassé par la sortie d’un nouveau langage ou d’une nouvelle version ? Reprenez des forces en suivant une formation continue en informatique ou en agilité pour muscler vos connaissances et savoir-faire."
                    src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                    buttonText="en savoir plus" />
          <Footer />
        </React.Fragment>
      )
  }
}

export default Formation;
