import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from'material-ui/Paper';
import Masonry from 'react-masonry-component';
import Ionicon from 'react-ionicons';
import ContactComponent from './ContactComponent';

const paperStyle = {
  width: 300,
  height: 300,
  margin: 10,
};

const tabStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

class TabView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

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
        <Tab  label="About Me" value="a" icon={<Ionicon icon="ion-information-circled" fontSize="35px" color="white"></Ionicon>}>
          <p>HERE IS SOME INFO ABOUT ME</p>
        </Tab>
        <Tab value="b" label="My Projects" value="b" icon={<Ionicon icon="ion-social-github" fontSize="35px" color="white"></Ionicon>}>
          <Masonry>
            {
              this.props.repoData.map(data => (
                <Paper zDepth={2} style={paperStyle}>
                  <h1>{data.name}</h1>
                  <p>{(data.description) ? data.description : 'No description'}</p>
                  <p>Link: {data.html_url}</p>
                  <p>Primary Language: {data.language}</p>
                </Paper>
              ))
            }
          </Masonry>  
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
