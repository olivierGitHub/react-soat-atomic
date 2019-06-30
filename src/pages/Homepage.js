import React, { Component } from 'react';
import TemplateHomepage from '../components/templates/homepage/templateHomepage';

class Homepage extends Component {

  render() {
    return (
        <TemplateHomepage mainTitle="Soat group"
                    title1="Inspirons vos transformations"
                    description1="SOAT, ce sont 360 consultants IT et coachs agiles qui développent un cercle vertueux entre connaissances et réalisations techniques pour transformer positivement vos organisations."
                    src="soat-photo.png"
                    description2="Mieux se connaître et mieux appréhender sa relation aux autres."
                    title3="Nous accompagnons vos projets"
                    description3="Du conseil, des réalisations et du coaching pour transformer durablement votre système d’information." />
      )
  }
}

export default Homepage;
