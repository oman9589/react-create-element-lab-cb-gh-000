import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {}, 'Chocolate'),
        React.createElement('li', {}, 'Vanilla'),
        React.createElement('li', {}, 'Banana')
      ]
    )
  );

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
