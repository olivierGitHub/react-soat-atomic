import React from 'react';
import { storiesOf } from '@storybook/react';
import TheInput from './TheInput';


storiesOf('Atoms|TheInput', module)
    .add('type text', () => <TheInput className="form-control" type="text" placeholder="rechercher" />)
    .add('type submit', () => <TheInput className="form-control" type="submit" />)
    .add('type date', () => <TheInput className="form-control" type="datetime-local" name="dateLocal" />)
    .add('type email', () => <TheInput className="form-control" type="email" name="email" />);
