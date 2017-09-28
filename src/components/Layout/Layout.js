import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

import './styles.css';

const Layout = ({ children }) => (
  <div className="appContentWrapper">
    <div className="appContent">
      {children}
    </div>
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
