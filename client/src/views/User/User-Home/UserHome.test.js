import React from 'react';
import ReactDOM from 'react-dom';
import UserHome from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
