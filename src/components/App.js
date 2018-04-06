import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BeerLogIndex from './beer-logs/index.js';

class MainContainer extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

class MagmaBeersApp extends React.Component {
  render() {
    return (
      <Router>
        <MainContainer>
          <Route exact path="/" component={BeerLogIndex}/>
          <Route path="/beer-logs" component={BeerLogIndex}/>
        </MainContainer>
      </Router>
    );
  }
}

export default MagmaBeersApp;
