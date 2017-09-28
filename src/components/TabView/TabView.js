import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Masonry from 'react-masonry-component';
import FlatButton from 'material-ui/FlatButton';
import Ionicon from 'react-ionicons';
import ContactComponent from './ContactComponent';
import './styles.css';

const cardStyle = {
  width: '95%',
  margin: 10,
  marginLeft: 15,
  height: 'auto',
};

const tabStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};

class TabView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

// Remove unnecessary items from API created_at string
  formatDate = (date) => {
    return (
      date.substring(0, 10)
    )  
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        contentContainerClassName="tab-item-wrapper"
      >
        <Tab label="About Me" value="a" icon={<Ionicon icon="ion-information-circled" fontSize="35px" color="white"></Ionicon>}>
          <p>HERE IS SOME INFO ABOUT ME</p>
        </Tab>
        <Tab style={tabStyle} label="My Projects" value="b" icon={<Ionicon icon="ion-social-github" fontSize="35px" color="white"></Ionicon>}>
            {
              this.props.repoData.map(data => (
                <Card style={cardStyle}>
                  <CardHeader
                    title={data.name}
                    subtitle={(data.description) ? data.description : 'No description'}
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                    <div className="card-text-wrapper">
                      <div className="card-text-item">
                        <p>Started: {this.formatDate(data.created_at)}</p>
                      </div>  
                      <div className="card-text-item">
                        <p>Primary Language: {data.language}</p>
                      </div>  
                      <a href={data.html_url}><Ionicon icon="ion-social-github" fontSize="35px" color="darkgrey" /></a>
                    </div>  
                  </CardText>
                </Card>
              ))
            }
        </Tab>  
        <Tab label="Contact Me" value="c" icon={<Ionicon icon="ion-ios-contact" fontSize="35px" color="white"></Ionicon>}>
          <ContactComponent />
        </Tab>  
      </Tabs>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    repoData: state.repo.data,
  }
}

export default connect(mapStateToProps)(TabView);
