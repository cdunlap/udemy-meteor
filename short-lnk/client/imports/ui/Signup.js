import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: ''
    };
  }
  
  onSubmit (e) {
    e.preventDefault();
    
    this.setState({
      error: 'Derp'
    })
  }
  
  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        
        <form onSubmit={this.onSubmit.bind(this)}>
          <input name="email" type="email" placeholder="Email Address" />
          <input name="password" type="password" placeholder="Password" />
          <button>Create Account</button>
        </form>
        
        <Link to="/">Have an account?</Link>
      </div>
    )
  }
}