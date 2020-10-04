import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdoptButtons from './AdoptButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdoptButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
})