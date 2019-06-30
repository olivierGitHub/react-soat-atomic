import React from 'react';
import { storiesOf } from '@storybook/react';
import TemplateHomepage from './templateHomepage';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('Templates|TemplateHomepage', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('template homepage', () => <TemplateHomepage mainTitle="Lorem ipsum"
                                    title1="Lorem ipsum"
                                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src="soat-logo.png"
                                    description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    title3="Lorem ipsum"
                                    description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />);

