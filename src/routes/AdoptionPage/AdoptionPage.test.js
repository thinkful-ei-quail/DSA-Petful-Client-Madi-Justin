import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdoptionPage from './AdoptionPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AdoptionPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})