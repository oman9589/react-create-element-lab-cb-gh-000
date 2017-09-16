import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
React.createElement('title', {}, 'test');

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
