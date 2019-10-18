import React from 'react';
import ReactDOM from 'react-dom';
import Books from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Books />, div);
  ReactDOM.unmountComponentAtNode(div);
});
