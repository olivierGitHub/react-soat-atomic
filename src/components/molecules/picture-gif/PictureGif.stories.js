import React from 'react';
import { storiesOf } from '@storybook/react';
import PictureGif from './PictureGif';


storiesOf('Molecules|PictureGif', module)
    .add('image only',
        () => <PictureGif src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                        alt="the image"
              />)
    .add('image and desc',
        () => <PictureGif description="Lorem ipsum dolor sit amet"
                        src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                        alt="the image"
              />);
