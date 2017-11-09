import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout(err => {
      console.log('Logged out', err);
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    
    const url = this.refs.url.value.trim();
    
    if(url) {
      Meteor.call('links.insert', url);
      
      this.refs.url.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Log Out</button>
        
        <LinksList/>
        
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button type="submit">Add Link</button>
        </form>
      </div>
    );
  }
}