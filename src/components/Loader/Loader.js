import React from 'react';
import './styles.css';
import loader from '../../assets/loader.gif';

const Loader = () => (
  <div className="loader-wrapper">
    <img src={loader} alt="animated loader" className="loader-img" />
  </div>
);

export default Loader;
