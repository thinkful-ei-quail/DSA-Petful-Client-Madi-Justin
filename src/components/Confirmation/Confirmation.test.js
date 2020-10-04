import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Confirmation from './Confirmation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Confirmation />, div);
  ReactDOM.unmountComponentAtNode(div);
})