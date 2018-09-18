import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Admin from './components/Admin';
import Home from './components/Home';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

import {items} from './static-data';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header/>
              
            <div className='wrapper'>
              <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/admin' component={Admin} />
              <Route component={ErrorPage}/>
              </Switch>
            </div>
          <Footer/>
        </React.Fragment>
      </Router>
      
    );
  }
}

export default App;
