lsimport React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
  React.createElement('h1', {}, 'test');

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
