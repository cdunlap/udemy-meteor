import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Signup from './imports/ui/Signup.js';
import Link from './imports/ui/Link.js';
import NotFound from './imports/ui/NotFound.js';
import Login from './imports/ui/Login.js';

window.browserHistory = browserHistory;

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Link} />
    <Route path="*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnAuthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);
  
  if(isAuthenticated && isUnAuthenticatedPage) {
    // Redirect to links
    browserHistory.push('/links');
  } else if(!isAuthenticated && isAuthenticatedPage) {
    // Redirect to home
    browserHistory.push('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});