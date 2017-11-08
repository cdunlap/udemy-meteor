import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        
        <p>Login form</p>
        
        <Link to="/signup">Have an account?</Link>
      </div>
    )
  }
}