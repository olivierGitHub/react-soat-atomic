import React, { Component } from 'react';
import TemplatePresentation from '../components/templates/presentation/templatePresentation';

class Presentation extends Component {

  render() {
    return (
        <TemplatePresentation title="Présentons-nous"
                    description="SOAT, ce sont 360 consultants IT et coachs agiles qui développent un cercle vertueux entre connaissances et réalisations techniques pour transformer positivement vos organisations."
                    src="https://www.soat.fr/sites/default/files/paragraph/header/170519_soat_gif_05_presentons_ae.gif"
                    buttonText="en savoir plus" />
      )
  }
}

export default Presentation;
