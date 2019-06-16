import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoTypeA from './InfoTypeA';
import { BrowserRouter, Route } from 'react-router-dom'


storiesOf('Organisms|InfoTypeA', module)
    .add('info type A', () => <InfoTypeA mainTitle="Lorem ipsum"
                                    title1="Lorem ipsum"
                                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src="soat-logo.png"
                                    description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    title3="Lorem ipsum"
                                    description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />);
