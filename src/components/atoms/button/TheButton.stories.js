import React from 'react';
import { storiesOf } from '@storybook/react';
import TheButton from './TheButton';


storiesOf('Atoms|TheButton', module)
    .add('button', () => <TheButton buttonText="Lorem ipsum" />);

