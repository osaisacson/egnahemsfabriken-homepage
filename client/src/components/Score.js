import React, { Component } from "react";

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let comparisonScore = "28%";
    //comparisonScore should be updated based on how many category agree/disagree items the user has clicked

    return (
      <div className="score">
        <p>you agree</p>
        <h1>{comparisonScore}</h1>
        <p>of the time</p>
      </div>
    );
  }
}
