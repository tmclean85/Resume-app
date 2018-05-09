import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import GrumpyCat from '../../assets/grumpcat.svg';
import './styles.css';

const NotFound = () => (
  <div className="not-found-wrapper">
    <Paper zDepth={2} className="not-found-paper">
      <img className="not-found-image" src={GrumpyCat} alt="grumpycat" />
      <h1 className="not-found-title">NOPE.</h1>
      <p className="not-found-text">We've only got one page here, friend.</p>
      <FlatButton label="back!" secondary={true} href="/" class="not-found-button" />
    </Paper>
  </div>
);


export default NotFound;
