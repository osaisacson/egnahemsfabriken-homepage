import React, { Component } from "react";
import VotingSection from "./VotingSection";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class RepVotes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //Structure returning each particular voting category and its items
  VotingSection = props => (
    <div>
      <h2>{props.title}</h2>
      {props.category.map(item => {
        return (
          <>
            <p>{item.text}</p>
            <p>{item.voted}</p>
          </>
        );
      })}
    </div>
  );

  render() {
    // Define subsets of main votingRecord
    let socialIssues = this.props.votingRecord.filter(
      record => record.category === "social issues"
    );
    let foreignPolicy = this.props.votingRecord.filter(
      record => record.category === "foreign policy and defence"
    );
    let welfareAndBenefits = this.props.votingRecord.filter(
      record => record.category === "welfare and benefits"
    );
    let taxationAndEmployment = this.props.votingRecord.filter(
      record => record.category === "taxation and employment"
    );
    let businessAndEconomy = this.props.votingRecord.filter(
      record => record.category === "business and economy"
    );
    let health = this.props.votingRecord.filter(
      record => record.category === "health"
    );
    let education = this.props.votingRecord.filter(
      record => record.category === "education"
    );
    let environment = this.props.votingRecord.filter(
      record => record.category === "environment"
    );

    let allVotingCategories = [
      {
        eventKey: "social-issues",
        title: "Social Issues",
        category: socialIssues
      },
      {
        eventKey: "foreign-policy",
        title: "Foreign Policy",
        category: foreignPolicy
      },
      {
        eventKey: "welfare-and-benefits",
        title: "Welfare & Benefits",
        category: welfareAndBenefits
      },
      {
        eventKey: "taxation-and-employment",
        title: "Taxation and Employment",
        category: taxationAndEmployment
      },
      {
        eventKey: "business-and-economy",
        title: "Business and The Economy",
        category: businessAndEconomy
      },
      {
        eventKey: "health",
        title: "Health",
        category: health
      },
      {
        eventKey: "education",
        title: "Education",
        category: education
      },
      {
        eventKey: "environment",
        title: "Environment",
        category: environment
      }
    ];

    return (
      <div className="tabs-section">
        <Tabs
          className="scroll-menu"
          defaultActiveKey="social-issues"
          id="uncontrolled-tab-example"
        >
          {allVotingCategories.map(category => {
            return (
              <Tab
                className="scroll-tab"
                key={category.eventKey}
                eventKey={category.eventKey}
                title={category.title}
              >
                <VotingSection category={category.category} />
              </Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
}
