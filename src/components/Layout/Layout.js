import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Layout = ({ children }) => (
  <div className="appContentWrapper">
    <div className="appContent">
      {children}
    </div>
    <div className="app-footer">
      <p>This page uses the Github API and was built using React.js and Redux.</p>
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
