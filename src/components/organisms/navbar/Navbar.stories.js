import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom'


storiesOf('Organisms|Navbar', module)
    .addDecorator(cmpnt => (
      <BrowserRouter>
        <Route path="/" component={() => cmpnt()} />
      </BrowserRouter>
    ))
    .add('navbar', () => <Navbar />);
