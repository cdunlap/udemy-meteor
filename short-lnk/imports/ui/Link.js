import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout(err => {
      console.log('Logged out', err);
    });
  }
  
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Log Out</button>
      </div>
    );
  }
}