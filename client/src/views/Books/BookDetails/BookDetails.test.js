import React from 'react';
import ReactDOM from 'react-dom';
import BookDetails from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
