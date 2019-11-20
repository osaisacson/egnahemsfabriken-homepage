window.Dataset = {
  //Factory to create an incremented set of numbers
  increment: (function(lowest, highest) {
    var set = [];
    for (var i = lowest; i <= highest; i++) {
      set.push(i);
      set.push(i + 0.5); //incrementation step
    }

    return set;
  })(0, 10), //starts at 0, ends at 10

  //Test set of fake data
  //from:
  //https://www.theyworkforyou.com/mp/25390/karin_smyth/bristol_south#numerology
  //
  representatives: [
    {
      id: "1",
      fname: "Karin",
      lname: "Smyth",
      repImg: "https://www.theyworkforyou.com/images/mpsL/25390.jpg",
      voteFreq:
        "Has voted in 80.56% of votes in this Parliament with this affiliation — average amongst MPs.",
      twitterUrl: "https://twitter.com/karinsmyth",
      votingRecord: [
        //From https://www.theyworkforyou.com/mp/25390/karin_smyth/bristol_south/votes#social
        //Either model after above (general), or by the more detailed https://www.theyworkforyou.com/mp/25390/karin_smyth/bristol_south/divisions?policy=6670
        //Or, ideally, an option to just see the general issues as a start, and on click fold out to go to the individual issues.
        {
          id: "1",
          category: "social issues",
          text: "Consistently voted for equal gay rights",
          voted: "yes"
        },
        {
          id: "2",
          category: "social issues",
          text: "Voted for allowing marriage between two people of same sex",
          voted: "yes"
        },
        {
          id: "3",
          category: "social issues",
          text:
            "Consistently voted for laws to promote equality and human rights",
          voted: "yes"
        },
        {
          id: "4",
          category: "social issues",
          text:
            "Voted for allowing terminally ill people to be given assistance to end their life",
          voted: "yes"
        },
        {
          id: "5",
          category: "foreign policy and defence",
          text:
            "Voted against use of UK military forces in combat operations overseas",
          voted: "no"
        },
        {
          id: "6",
          category: "foreign policy and defence",
          text: "Voted against investigations into the Iraq war",
          voted: "no"
        },
        {
          id: "7",
          category: "foreign policy and defence",
          text: "Voted for replacing Trident with a new nuclear weapons system",
          voted: "yes"
        },
        {
          id: "8",
          category: "foreign policy and defence",
          text: "Generally voted for more EU integration",
          voted: "yes"
        },
        {
          id: "9",
          category: "foreign policy and defence",
          text:
            "Generally voted for a referendum on the UK's membership of the EU",
          voted: "yes"
        },
        {
          id: "10",
          category: "foreign policy and defence",
          text:
            "Generally voted for a right to remain for EU nationals already in living in the UK",
          voted: "yes"
        },
        {
          id: "11",
          category: "foreign policy and defence",
          text: "Voted a mixture of for and against UK membership of the EU",
          voted: "mix"
        },
        {
          id: "12",
          category: "foreign policy and defence",
          text: "Voted against military action against ISIL (Daesh)",
          voted: "no"
        },
        {
          id: "13",
          category: "welfare and benefits",
          text:
            "Generally voted for paying higher benefits over longer periods for those unable to work due to illness or disability",
          voted: "yes"
        },
        {
          id: "14",
          category: "welfare and benefits",
          text:
            "Almost always voted against a reduction in spending on welfare benefits",
          voted: "no"
        },
        {
          id: "15",
          category: "taxation and employment",
          text:
            "Generally voted against raising the threshold at which people start to pay income tax",
          voted: "no"
        },
        {
          id: "16",
          category: "taxation and employment",
          text: "Generally voted against higher taxes on alcoholic drinks",
          voted: "no"
        },
        {
          id: "17",
          category: "taxation and employment",
          text: "Almost always voted for higher taxes on banks",
          voted: "yes"
        },
        {
          id: "18",
          category: "taxation and employment",
          text:
            "Almost always voted against more restrictive regulation of trade union activity",
          voted: "no"
        },
        {
          id: "19",
          category: "taxation and employment",
          text: "Consistently voted against reducing capital gains tax",
          voted: "yes"
        },
        {
          id: "20",
          category: "business and economy",
          text:
            "Almost always voted against reducing the rate of corporation tax",
          voted: "no"
        },
        {
          id: "21",
          category: "business and economy",
          text:
            "Voted a mixture of for and against measures to reduce tax avoidance",
          voted: "mix"
        },
        {
          id: "22",
          category: "business and economy",
          text: "Generally voted for new high speed rail infrastructure",
          voted: "yes"
        },
        {
          id: "23",
          category: "health",
          text:
            "Voted against reforming the NHS so GPs buy services on behalf of their patients",
          voted: "no"
        },
        {
          id: "24",
          category: "health",
          text:
            "Voted for allowing terminally ill people to be given assistance to end their life",
          voted: "yes"
        },
        {
          id: "25",
          category: "education",
          text: "Consistently voted against academy schools",
          voted: "no"
        },
        {
          id: "26",
          category: "environment",
          text: "Almost always voted for measures to prevent climate change",
          voted: "yes"
        },
        {
          id: "27",
          category: "environment",
          text: "Almost always voted against higher taxes on plane tickets",
          voted: "no"
        },
        {
          id: "28",
          category: "environment",
          text:
            "Voted for financial incentives for low carbon emission electricity generation methods",
          voted: "yes"
        },
        {
          id: "29",
          category: "environment",
          text:
            "Voted against greater regulation of hydraulic fracturing (fracking) to extract shale gas",
          voted: "no"
        },
        {
          id: "30",
          category: "environment",
          text: "Generally voted for new high speed rail infrastructure",
          voted: "no"
        }
      ]
    }
  ]
};
