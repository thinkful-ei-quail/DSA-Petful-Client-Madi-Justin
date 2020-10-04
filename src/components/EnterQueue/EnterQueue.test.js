import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EnterQueue from './EnterQueue';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EnterQueue />, div);
  ReactDOM.unmountComponentAtNode(div);
})