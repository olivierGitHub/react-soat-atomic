import React from 'react';
import Description from '../../atoms/description/Description';

function SocialNetwork(props) {

    return (
        <React.Fragment>
          <Description text="Retrouvez-nous sur :" />
          <Description text={props.socialNetwork1} />
          <Description text={props.socialNetwork2} />
        </React.Fragment>
      )
}

export default SocialNetwork;
