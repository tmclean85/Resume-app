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
    if (!this.props.repoData.length) {
      return <Loader />;
    } return (
      <Home
        repoData={this.props.repoData}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repoData: state.repo.data,
  };
};

export default connect(mapStateToProps)(HomeContainer);
