import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialNetwork from './SocialNetwork';


storiesOf('Molecules|SocialNetwork', module)
    .add('social network', () => <SocialNetwork socialNetwork1="Facebook" socialNetwork2="Twitter" />);
