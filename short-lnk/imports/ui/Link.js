import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <LinksList/>
      <AddLink/>
    </div>
  );
};