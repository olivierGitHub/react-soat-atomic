import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoTypeB from './InfoTypeB';
import { BrowserRouter, Route } from 'react-router-dom'


storiesOf('Organisms|InfoTypeB', module)
    .add('info type B', () => <InfoTypeB title="Lorem ipsum"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    additionalDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                                    buttonText="lorem ipsum"
                              />);
