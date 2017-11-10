import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends React.Component {
  onLogout() {
    Accounts.logout(err => {
      console.log('Logged out', err);
    });
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.onLogout.bind(this)}>Log Out</button>
      </div>
    );
  }
}