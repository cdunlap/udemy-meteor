import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }
  
  onSubmit(e) {
    e.preventDefault();

    const url = this.state.url;
    if(url) {
      Meteor.call('links.insert', url, (err) => {
        if(!err) {
          this.setState({
            url: ''
          });
        }
      });
    }
  }
  
  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    });
  }
  
  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" 
            value={this.state.url} onChange={this.onChange.bind(this)}/>
          <button type="submit">Add Link</button>
        </form>
      </div>
    );
  }
}