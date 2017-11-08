import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: ''
    };
  }
  
  onSubmit (e) {
    e.preventDefault();
    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();
    
    Accounts.createUser({email, password}, (err) => {
      console.log('Signup callback', err);
    });
  }
  
  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        
        <form onSubmit={this.onSubmit.bind(this)}>
          <input name="email" ref="email" type="email" placeholder="Email Address" />
          <input name="password" ref="password" type="password" placeholder="Password" />
          <button>Create Account</button>
        </form>
        
        <Link to="/">Have an account?</Link>
      </div>
    )
  }
}