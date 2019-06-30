import React from 'react';
import { storiesOf } from '@storybook/react';
import TemplatePartage from './templatePartage';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('Templates|TemplatePartage', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('template partage', () => <TemplatePartage mainTitle="Lorem ipsum"
                                    title1="Lorem ipsum"
                                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src1="soat-logo.png"
                                    buttonText1="lorem"
                                    title2="Lorem ipsum"
                                    description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src2="soat-logo.png"
                                    buttonText2="lorem"
                                    title3="Lorem ipsum"
                                    description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                                    src3="soat-logo.png"
                                    buttonText3="lorem" />);

