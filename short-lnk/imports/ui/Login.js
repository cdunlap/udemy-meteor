import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
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
    
    Meteor.loginWithPassword(email, password, err => {
      if(err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.setState({
          error: undefined
        });
      }
    });
  }
  
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Lnk</h1>
          
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          
          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input name="email" ref="email" type="email" placeholder="Email Address" />
            <input name="password" ref="password" type="password" placeholder="Password" />
            <button className="button">Login</button>
          </form>
          
          <Link to="/signup">Need an account?</Link>
        </div>
      </div>
    )
  }
}