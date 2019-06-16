import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';


storiesOf('Atoms|Title', module)
    .add(' short title', () => <Title text="Lorem" />)
    .add(' long title', () => <Title text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />);
