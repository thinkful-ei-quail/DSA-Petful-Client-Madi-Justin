import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import People from './People';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><People /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})