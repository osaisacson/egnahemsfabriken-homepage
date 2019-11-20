import React, { Component } from "react";

export default class YourVote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agree: false,
      disagree: false
    };
    this.addAgreeClass = this.addAgreeClass.bind(this);
    this.addDisagreeClass = this.addDisagreeClass.bind(this);
  }

  addAgreeClass() {
    const currentState = this.state.agree;
    this.setState({ agree: !currentState, disagree: false });
  }

  addDisagreeClass() {
    const currentState = this.state.disagree;
    this.setState({ agree: false, disagree: !currentState });
  }

  render() {
    return (
      <div className="flex-end">
        <button
          className={`learn-more ${this.state.agree ? "agree" : null} `}
          onClick={this.addAgreeClass}
          id="agree"
        >
          Agree
        </button>
        <button
          className={`learn-more ${this.state.disagree ? "disagree" : null} `}
          onClick={this.addDisagreeClass}
          id="disagree"
        >
          Disagree
        </button>
      </div>
    );
  }
}
