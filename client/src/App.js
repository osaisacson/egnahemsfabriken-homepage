import React from 'react';
import './sass/main.scss';
import Blog from './components/Blog';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main-content-wrapper">
          <h1>Egnahemsfabriken</h1>
          <Blog></Blog>
        </div>
      </div>
    );
  }
}

export default App;
