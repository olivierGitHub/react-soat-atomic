import React from 'react';
import { storiesOf } from '@storybook/react';
import TheLink from './TheLink';


storiesOf('Atoms|TheLink', module)
    .add('link', () => <TheLink href="" text="Lorem" />);

