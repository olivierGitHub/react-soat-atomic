import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoText from './InfoText';


storiesOf('Molecules|InfoText', module)
    .add('long description with button',
        () => <InfoText title="Lorem ipsum"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        additionalDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        buttonText="lorem ipsum"
              />)
    .add('short description with button',
        () => <InfoText title="Lorem ipsum"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        buttonText="lorem ipsum"
              />)
    .add('short description no button',
        () => <InfoText title="Lorem ipsum"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              />);
