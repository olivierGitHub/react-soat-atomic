import React, { Component } from 'react';
import TemplateFormation from '../components/templates/formation/templateFormation';

class Formation extends Component {

  render() {
    return (
        <TemplateFormation title="Formons vos équipes"
                    description="Des formations en informatique pour monter en compétences sur les nouvelles technologies et les méthodes agiles, avec des formateurs gonflés à bloc !"
                    additionalDescription="Vous avez l’impression de courir après les évolutions technologiques ? D’être constamment dépassé par la sortie d’un nouveau langage ou d’une nouvelle version ? Reprenez des forces en suivant une formation continue en informatique ou en agilité pour muscler vos connaissances et savoir-faire."
                    src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                    buttonText="en savoir plus" />
      )
  }
}

export default Formation;
