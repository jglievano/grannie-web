import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
  render() {
    return (
        <h1>Grannie Web App</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
