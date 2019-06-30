import React from 'react';
import { storiesOf } from '@storybook/react';
import TheNavLink from './TheNavLink';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('Atoms|TheNavLink', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('navbar link with text', () => <TheNavLink to="/" text="Lorem" />)
    .add('navbar link with image', () => <TheNavLink to="/" src="soat-logo.png" text="Lorem" />);
