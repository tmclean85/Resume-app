import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Masonry from 'react-masonry-component';
import Ionicon from 'react-ionicons';
import ContactComponent from './ContactComponent';
import InfoComponent from './InfoComponent';
import FilterList from './FilterList';
import './styles.css';

class TabView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      openMenu: false,
    };
  }

// Remove unnecessary items from API created_at string
  formatDate = (date) => {
    return (
      date.substring(0, 10)
    )
  };

  handleTabChange = (value) => {
    this.setState({
      value: value,
    });
  };
  
  
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleTabChange}
        contentContainerClassName="tab-item-wrapper"
      >
        <Tab label="About Me" value="a" icon={<Ionicon icon="ion-information-circled" fontSize="35px" color={(this.state.value === "a") ? "white" : "lightgrey"}></Ionicon>}>
          <InfoComponent />
        </Tab>
        <Tab label="My Projects" value="b" icon={<Ionicon icon="ion-social-github" fontSize="35px" color={(this.state.value === "b") ? "white" : "lightgrey"}></Ionicon>}>
          <div className="filter-wrapper">
            <FilterList
              dispatch={this.props.dispatch}
              filterData={this.props.filter}
            />
          </div>
          <Masonry className={'masonry'} elementType={'div'}>
            {(this.props.filter.length)
              ?  this.props.repoData.filter(item =>
                  item.language === this.props.filter[0]
                ).map(data => (
                  <div className="project-card">
                    <Card
                      key={data.id}
                    >
                      <CardHeader
                        title={data.name}
                        subtitle={((data.description) ? data.description + ' ' : 'No description ')}
                      />
                      <CardText>
                        <div className="project-links">
                          <FlatButton label="Github Repo" secondary={true} />
                          <a className="card-link" href={data.html_url} target="_blank">Github Repo</a>
                          {(data.homepage)
                            ? <a className="card-link" href={data.homepage} target="_blank">Github Homepage</a>
                            : null
                          }
                        </div>
                      </CardText>
                    </Card>
                  </div>
                ))
              : this.props.repoData.map(data => (
                  <div className="project-card">
                    <Card
                      key={data.id}
                    >
                      <CardHeader
                        title={data.name}
                        subtitle={((data.description) ? data.description + ' ' : 'No description ')}
                      />
                      <CardText>
                        <div className="project-links">
                          <a className="card-link" href={data.html_url} target="_blank">Github Repo</a>
                          {(data.homepage)
                            ? <a className="card-link" href={data.homepage} target="_blank">Github Homepage</a>
                            : null
                          }
                        </div>
                      </CardText>
                    </Card>
                  </div>
                ))
            }
          </Masonry>
        </Tab>
        <Tab label="Contact Me" value="c" icon={<Ionicon icon="ion-ios-contact" fontSize="35px" color={(this.state.value === "c") ? "white" : "lightgrey"}></Ionicon>}>
          <ContactComponent />
        </Tab>  
      </Tabs>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    repoData: state.repo.data,
    filter: state.filter.data,
  }
}

export default connect(mapStateToProps)(TabView);
