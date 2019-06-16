import React from 'react';
import LegalInfo from '../../molecules/legal-info/LegalInfo';
import SocialNetwork from '../../molecules/social-network/SocialNetwork';
import './css/footer.css';

function Footer(props) {

  return (
    <div className="footer-color">
        <div className="row footer-soat">
          <div className="col-sm-6">
            <LegalInfo />
          </div>
          <div className="col-sm-6">
            <SocialNetwork socialNetwork1="Facebook" socialNetwork2="Twitter" />
          </div>
        </div>
    </div>
  )
}

export default Footer;
