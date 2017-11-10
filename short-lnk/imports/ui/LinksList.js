import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      links: []
    };
  }
  
  componentDidMount() {
    Meteor.subscribe('links');
    this.linksTracker = Tracker.autorun(() => {
      const links = Links.find().fetch();
      this.setState({
        links
      });
    });
    
  }
  
  componentWillUnmount() {
    this.linksTracker.stop();
  }
  
  renderLinksListItems() {
    return this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return (
        <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>
      );
    });
  }
  
  render() {
    return (
      <div>
        <p>Links list</p>
        
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
}