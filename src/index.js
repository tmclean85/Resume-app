import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './redux/store';
import Layout from './components/Layout';
import Routes from './routes';


const Trevor = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>
);

ReactDOM.render(<Trevor />, document.getElementById('root'));
registerServiceWorker();
