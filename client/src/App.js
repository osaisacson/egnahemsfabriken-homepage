import React from "react";
import "./sass/main.scss";

import Postcode from "./components/Postcode";
import Rep from "./components/Rep";
import RepVotes from "./components/RepVotes";

//Import fake data
import "./dataset.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCity: false,
      showPostcode: false,
      showRepInfo: false,
      backgroundImage: null,
      city: "",
      postcode: "",
      repData: {}
    };
  }

  render() {
    var backgroundImage = {
      backgroundImage: `url(${this.state.backgroundImage})`
    };
    return (
      <div className="App" style={backgroundImage}>
        <div className="main-content-wrapper">
          <br></br>
          {/* Prompt which city they live in */}
          <form onSubmit={this.handleCitySubmit}>
            <input
              placeholder="enter City"
              type="text"
              name="username"
              data-lpignore="true"
              autoComplete="off"
              ref={node => (this.inputNode = node)}
            />
          </form>
          <h6 className="fade-in-out">press enter when done</h6>
          {/* Prompt for their postcode */}
          {this.state.showPostcode ? (
            <Postcode passPostcodeToParent={this.handlePostcodeSubmit} />
          ) : null}
          {/* Show the info for their rep*/}
          {this.state.showRepInfo ? <Rep repData={this.state.repData} /> : null}
        </div>
        {this.state.showRepInfo ? (
          <RepVotes votingRecord={this.state.repData.votingRecord} />
        ) : null}
      </div>
    );
  }

  handleCitySubmit = event => {
    event.preventDefault();

    //Here should be an API call to unsplash, returning a picture matching currentCity and setting it as backgroundImage below.
    let currentCity = event.target.username.value;
    this.setState({
      city: currentCity,
      showCity: true,
      showPostcode: true,
      backgroundImage:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    });

    console.log("You entered your city is:");
    console.log(currentCity);
    console.log(
      "...but since this is only a static demo let's say you said 'London'"
    );
  };

  handlePostcodeSubmit = event => {
    event.preventDefault();

    let currentPostcode = event.target.username.value;

    // let postcodeCheck = true;
    // Add a function here that checks if the postcode is valid. If so, return true, else return an error message.

    //Here should be an API call to https://www.theyworkforyou.com/api/docs/getConstituency, returning the data for the rep matching the given postcode and setting it as repData below.

    this.setState({
      postCode: currentPostcode,
      showRepInfo: true,
      repData: window.Dataset.representatives[0] //should return data of only the rep that matches the postcode
    });

    console.log("Your entered postcode is:");
    console.log(currentPostcode);
    console.log("...but for now let's say it was 'BS3 1QP'");
  };
}

export default App;
