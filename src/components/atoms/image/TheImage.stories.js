import React from 'react';
import { storiesOf } from '@storybook/react';
import TheImage from './TheImage';


storiesOf('Atoms|TheImage', module)
    .add('image', () => <TheImage src="soat-logo.png" />);

