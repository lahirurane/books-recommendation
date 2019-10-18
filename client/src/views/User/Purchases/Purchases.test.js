import React from 'react';
import ReactDOM from 'react-dom';
import Purchases from './Purchases';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Purchases />, div);
  ReactDOM.unmountComponentAtNode(div);
});
