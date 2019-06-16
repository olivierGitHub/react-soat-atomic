import React, { Component } from 'react';
import Navbar from '../components/organisms/navbar/Navbar';
import Footer from '../components/organisms/footer/Footer';
import InfoTypeA from '../components/organisms/info-type-a/InfoTypeA';

class Homepage extends Component {

  render() {
    return (
        <React.Fragment>
          <Navbar />
          <InfoTypeA mainTitle="Soat group"
                    title1="Inspirons vos transformations"
                    description1="SOAT, ce sont 360 consultants IT et coachs agiles qui développent un cercle vertueux entre connaissances et réalisations techniques pour transformer positivement vos organisations."
                    src="soat-photo.png"
                    description2="Mieux se connaître et mieux appréhender sa relation aux autres."
                    title3="Nous accompagnons vos projets"
                    description3="Du conseil, des réalisations et du coaching pour transformer durablement votre système d’information." />
          <Footer />
        </React.Fragment>
      )
  }
}

export default Homepage;
