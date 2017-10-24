import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Loader from '../../components/Loader';
import { getRepoData } from '../../redux/modules/repoData';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getRepoData());
  }

  render() {
    if (!this.props.repoData.length && !this.props.filteredProjects.length) {
      return (
        <Loader />
      );
    } else if(this.props.filteredProjects.length) {
      return (
        <Home
          repoData={this.props.filteredProjects}
        />
      );
    } else {
      return (
        <Home
          repoData={this.props.repoData}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    repoData: state.repo.data,
    filteredProjects: state.filter.data,
  };
};

export default connect(mapStateToProps)(HomeContainer);
