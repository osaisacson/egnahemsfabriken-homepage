import React from "react";
import "./sass/main.scss";

//Import fake data
import "./dataset.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App" style={backgroundImage}>
        <div className="main-content-wrapper">
          <br></br>
          <h1>Egnahemsfabriken</h1>
        </div>
      </div>
    );
  }
}

export default App;
