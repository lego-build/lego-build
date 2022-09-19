import React from 'react';
import ReactDOM from 'react-dom';
import blockName from './blockName';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<blockName />, div);
  ReactDOM.unmountComponentAtNode(div);
});