import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Admin from './components/Admin';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <Header/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/admin' component={Admin} />
          <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
