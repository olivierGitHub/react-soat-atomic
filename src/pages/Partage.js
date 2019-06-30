import React, { Component } from 'react';
import TemplatePartage from '../components/templates/partage/templatePartage';

class Partage extends Component {

  render() {
    return (
        <TemplatePartage mainTitle="La culture IT partagée"
                    title1="Le blog"
                    description1="Des équipes se constituent spontanément en fonction de leurs centres d’intérêt, pour décrypter les tendances technologiques et les bonnes pratiques sur le blog SOAT. Architecture, Web Front, Agilité, Mobilité, Cloud, Big Data, DevOps, Craftsmanship... choisissez votre team !"
                    src1="https://www.soat.fr/sites/default/files/styles/image-element/public/paragraph/element/soat-icon-06-blog.png?itok=6SPzGdGv"
                    buttonText1="Tous les articles"
                    title2="Les événements"
                    description2="Chaque mois, des événements conviviaux – matinale IT, Techlabs, Meet’Up et retours d’expérience - permettent d’échanger sur les technologies, les méthodes et pratiques en vogue. Participez à nos prochains événements sur simple inscription !"
                    src2="https://www.soat.fr/sites/default/files/styles/image-element/public/paragraph/element/soat-icon-07-evenements-techniques.png?itok=x7ddGWVg"
                    buttonText2="Tous les évènements"
                    title3="La publication"
                    description3="Rédigés par les maîtres de leur discipline, les livres blancs mènent une course de fond thématique quand les avis d’expert rebondissent sur l’actualité tech’ avec des mises en perspective, et les refcards offrent un aperçu complet sur une technologie spécifique. Et parce que les Soatiens sont des joueurs (sérieux) par nature, ils s’amusent aussi à concevoir des serious game."
                    src3="https://www.soat.fr/sites/default/files/styles/image-element/public/paragraph/element/soat-icon-08-publications.png?itok=SvKFCSbz"
                    buttonText3="Tous les publications" />
      )
  }
}

export default Partage;
