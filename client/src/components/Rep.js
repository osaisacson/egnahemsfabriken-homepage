import React, { Component } from "react";
import Score from "./Score";

import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Rep extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="rep-and-score-section">
          <div className="rep-section">
            <div className="avatar">
              <img alt="rep" src={this.props.repData.repImg} />
            </div>

            <div>
              <h4>{this.props.repData.fname}</h4>
              <h4>{this.props.repData.lname}</h4>
              <h6>speaks for you</h6>
            </div>
          </div>
          <Score />
        </div>

        {this.props.repData.twitterUrl ? (
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="url"
                url={this.props.repData.twitterUrl}
                options={{ height: 400 }}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
