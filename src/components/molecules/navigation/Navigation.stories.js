import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';
import { BrowserRouter, Route } from 'react-router-dom'


storiesOf('Molecules|Navigation', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('navigation', () => <Navigation />);
