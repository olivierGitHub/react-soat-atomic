import React from 'react';
import Link from '../../atoms/link/TheLink';
import Description from '../../atoms/description/Description';

function LegalInfo() {
  return (
    <React.Fragment>
      <Link text="Mentions Légales" />
      <Description text="Tous droits réservés à Olivier Coulibaly et Soat" />
    </React.Fragment>
  )
}

export default LegalInfo;
