import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader title="Your Links"/>
        <LinksList/>
        <AddLink/>
      </div>
    );
  }
}