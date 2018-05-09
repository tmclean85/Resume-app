import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './redux/store';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import Routes from './routes';


const Trevor = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Trevor />, document.getElementById('root'));
// registerServiceWorker();
