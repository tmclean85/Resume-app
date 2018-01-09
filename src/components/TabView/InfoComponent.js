import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Ionicon from 'react-ionicons';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class InfoComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      workOpen: false,
      infoOpen: false,
      schoolOpen: false,
    };
  }

  handleWorkOpen = () => {
    this.setState({workOpen: true});
  };

  handleInfoOpen = () => {
    this.setState({infoOpen: true});
  };

  handleSchoolOpen = () => {
    this.setState({schoolOpen: true});
  };

  handleModalClose = () => {
    this.setState({workOpen: false, infoOpen: false, schoolOpen: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Okay!"
        primary={true}
        onClick={this.handleModalClose}
      />,
    ];

    return (
      <div className="info-wrapper">
        <RaisedButton
          className="info-button"
          label="work"
          onClick={this.handleWorkOpen}
          icon={<Ionicon icon="ion-ios-briefcase" fontSize="25px" color="black"></Ionicon>}
        />
        <RaisedButton
          className="info-button"
          label="play"
          onClick={this.handleInfoOpen}
          icon={<Ionicon icon="ion-ios-game-controller-a" fontSize="35px" color="black"></Ionicon>}
        />
        <RaisedButton
          className="info-button"
          label="code"
          onClick={this.handleSchoolOpen}
          icon={<Ionicon icon="ion-code" fontSize="25px" color="black"></Ionicon>}
        />
        {/* <h3>Prefer a more traditional resume?</h3>
        <RaisedButton
          className="info-button"
          label="pdf"
          onClick={null}
          icon={<Ionicon icon="ion-ios-download-outline" fontSize="25px" color="black"></Ionicon>}
        /> */}
        <Dialog
          title="About My Work"
          actions={actions}
          modal={false}
          open={this.state.workOpen}
          onRequestClose={this.handleModalClose}
          autoScrollBodyContent={true}
        >
          <p>From October of 2004 until April of 2012, I worked for shipping megagiant Maersk. During that time I had the opportunity to try out a lot of different things.</p>
          <p>I started as a material handler, loading and unloading containers either manually or using a forklift. There was a lot of heavy lifting involved.</p>
          <p>In 2010 I moved into the trucking department as a dispatcher. Here I directly dispatched truck drivers to and from the port and various other places, and got to plan the flow of containers from their overseas origin to a few of our local operations.</p>
          <p>After less than a year of dispatching I was promoted to crossdock supervisor, thus begining my career in management. In this role I managed a large unionized blue-collar workforce, promoted safety, prepared productivity reports, and came up with creative ways to meet different goals.</p>
          <p>In June of 2011 I made a switch to supervising the container yard. Here I directly managed a fleet of shunt truck drivers and other equipment operators, maintained the container yard and oversaw all of the day-to-day operations of a high-volume container operation. I did this until I left the company in April of 2012.</p>
          <p>From here I worked for SCI Logistics as a warehouse/inventory supervisor from April 2012 until June of 2016. I managed a large inventory of retail products as well as the warehouse and shipping staff.</p>
          <p>From June of 2016 until March of 2017 I worked for Pacific Coast Express, a line-haul trucking company. As the senior operations supervisor I managed the dock staff, oversaw the shipping and receiving of freight, and coordinated line-haul trucking schedules.</p>
        </Dialog>
        <Dialog
          title="About Me"
          actions={actions}
          modal={false}
          open={this.state.infoOpen}
          onRequestClose={this.handleModalClose}
          autoScrollBodyContent={true}
        >
          <p>I love to write code. I've spent a lot of my leisure time since finishing school tinkering with programming challenges and working on this web app. The process of working on a project of any scale, from a small algorithmic problem to a functional native ios app for a real client, is one I've grown to love.</p>
          <p>I have a young son who keeps my wife and I very busy. One of my favourite things to do is to combine forces with him to create the most imposing lego construct our mortal hands are capable of.</p>
          <p>I love to travel, although since the arrival of our son we've had less opportunity to do so. He's getting to a travelling age though, and hopefully we'll be able to have adventures as a family pretty soon.</p>
          <p>I'm something of a hobbyist gamer, although frequently this hobby is pushed to the wayside by more important things. I love RPG's and strategy games.</p>
          <p>I'm also an accomplished camper, and hope to continue to zealously practice my craft during the more conducive seasons.</p>
        </Dialog>
        <Dialog
          title="About My Powers"
          actions={actions}
          modal={false}
          open={this.state.schoolOpen}
          onRequestClose={this.handleModalClose}
          autoScrollBodyContent={true}
        >
          <p>Super fluent:</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3 with SASS</li>
            <li>JavaScript (ES6, jQuery)</li>
            <li>React/React Native</li>
            <li>Redux</li>
            <li>Agile methodology</li>
            <li>Responsive development</li>
            <li>WordPress and related PHP</li>
            <li>Git</li>
            <li>Gulp</li>
            <li>Front-end ninjitsu</li>
          </ul>
          <p>Enthusiastic dabbler:</p>
          <ul>
            <li>MongoDB</li>
            <li>Angular2</li>
            <li>NodeJS</li>
            <li>PostgresQL</li>
            <li>Express</li>
            <li>TDD with Jest</li>
            <li>graphQL</li>
            <li>Apple xCode</li>
            <li>Android SDK</li>
          </ul>
          <p>Additional skills:</p>
          <ul>
          <li>Loves to learn from others, and teach where able</li>
          <li>Aware of how much he doesn't know but is enthusiastically working on it</li>
          </ul>
          <p>I completed a highly condensed and intensive 6-month Full Stack Development program at RED Academy in Vancouver in October of 2017. I learned a tremendous amount, just enough to be appropriately humbled by the sheer volume of how much more there is to learn. I'm eager to on-board with an experienced team and learn from them while also making a meaningful contribution to the product and culture of my eventual home.</p>
        </Dialog>
      </div>
    );
  }  
};

export default InfoComponent;
