import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BeerLogIndex from './beer-logs/index.js';
// import VisibleBeerList from '../containers/beers/index.js'
import { createBrowserHistory } from 'history'
import HomePage from './HomePage'
// import SomeProtectedPageComponent from './SomeProtectedPageComponent'
import SignInScreen from './sign/SignInScreen'
import { generateRequireSignInWrapper } from 'redux-token-auth'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/signin',
})

const history = createBrowserHistory({})

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
      <Router history={history}>
        <MainContainer>
          {/* <Route exact path="/" component={BeerLogIndex}/> */}
          <Route path="/beer-logs" component={BeerLogIndex}/>
          <Route exact path="/" component={requireSignIn(BeerLogIndex)} />
          <Route path="/signin" component={SignInScreen} />
        </MainContainer>
      </Router>
    );
  }
}

export default MagmaBeersApp;
