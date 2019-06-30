import React from 'react';
import { storiesOf } from '@storybook/react';
import TemplatePresentation from './templatePresentation';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('Templates|TemplatePresentation', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('template presentation', () => <TemplatePresentation title="Lorem ipsum"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                                    buttonText="lorem ipsum" />);

