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
          label="school"
          onClick={this.handleSchoolOpen}
          icon={<Ionicon icon="ion-university" fontSize="25px" color="black"></Ionicon>}
        />
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
          title="About My Education"
          actions={actions}
          modal={false}
          open={this.state.schoolOpen}
          onRequestClose={this.handleModalClose}
          autoScrollBodyContent={true}
        >
          <p>I graduated from Queen Elizabeth Senior Secondary in 2003.</p>
          <p>During my career in logistics I took courses in Industrial First Aid and numerous management, leadership, and lean operating philosophy courses.</p>
          <p>In 2017 I took the full-stack development program at RED Academy. We covered a pretty serious tech stack during the program and I'm more comfortable with some languages and frameworks than others.</p>
          <p>I'm very comfortable with the following:</p>
          <ul>
            <li>CSS3 (SASS/SCSS)</li>
            <li>HTML5</li>
            <li>JavaScript (jQuery)</li>
            <li>PHP</li>
            <li>React / React Native</li>
            <li>Redux</li>
            <li>MongoDB</li>
            <li>Meteor</li>
            <li>WordPress</li>
            <li>REST API</li>
            <li>MAMP</li>
          </ul>  
          <p>Additionally I have a bit of experience and something of a start with the following:</p>
          <ul>
            <li>Angular2</li>
            <li>Node.js</li>
            <li>postgresql</li>
            <li>express</li>
            <li>Jest (unit testing)</li>
            <li>graphQL</li>
          </ul>
          <p>By far the most important skill I took from the full-stack program was the ability to learn voraciously. I may not know it all, but I can learn it all!</p>
        </Dialog>
      </div>
    );
  }  
};

export default InfoComponent;
