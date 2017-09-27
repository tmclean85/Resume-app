import { connect } from 'react-redux';
import { pink } from 'material-ui/styles/colors';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const style = {
  margin: 12,
};

const Header = () => (
  <div className="headerBar">
    <AppBar
      showMenuIconButton={true}
      style={{backgroundColor: pink}}
      title='TREVOR!'
    >
      <RaisedButton label='Contact me' primary={true} style={style} />
    </AppBar>
  </div>  
);

export default Header;
