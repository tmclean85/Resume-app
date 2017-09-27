import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { getRepoData } from '../../redux/modules/repoData';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getRepoData());
  }

  render() {
    return (
      <Home
        repoData={this.props.repoData}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repoData: state.repo.repoData,
  };
};


export default connect(mapStateToProps)(HomeContainer);
