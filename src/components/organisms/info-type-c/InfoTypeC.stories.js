import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoTypeC from './InfoTypeC';
import { BrowserRouter, Route } from 'react-router-dom'


storiesOf('Organisms|InfoTypeC', module)
    .add('info type C', () => <InfoTypeC mainTitle="Lorem ipsum"
                                    title1="Lorem ipsum"
                                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src1="soat-logo.png"
                                    alt1="the image"
                                    buttonText1="lorem"
                                    title2="Lorem ipsum"
                                    description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src2="soat-logo.png"
                                    alt2="the image"
                                    buttonText2="lorem"
                                    title3="Lorem ipsum"
                                    description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src3="soat-logo.png"
                                    alt3="the image"
                                    buttonText3="lorem"
      />);
