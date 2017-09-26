import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Layout from './components/Layout';
import Routes from './routes';


const Trevor = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>  
);

ReactDOM.render(<Trevor />, document.getElementById('root'));
registerServiceWorker();
