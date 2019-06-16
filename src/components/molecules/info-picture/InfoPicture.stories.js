import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoPicture from './InfoPicture';


storiesOf('Molecules|InfoPicture', module)
    .add('title with image, desc and button',
        () => <InfoPicture title="Lorem ipsum"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        src="soat-logo.png"
                        alt="the image"
                        buttonText="lorem ipsum"
              />)
    .add('image and desc only',
        () => <InfoPicture description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        src="soat-logo.png"
                        alt="the image"
              />);
