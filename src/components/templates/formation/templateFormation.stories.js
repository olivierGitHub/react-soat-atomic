import React from 'react';
import { storiesOf } from '@storybook/react';
import TemplateFormation from './templateFormation';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('Templates|TemplateFormation', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('template formation', () => <TemplateFormation title="Lorem ipsum"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    additionalDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src="https://www.soat.fr/sites/default/files/paragraph/header/soat-formons.gif"
                                    buttonText="lorem ipsum"
                    />);
