import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <div className="page-content">
        <LinksListFilters/>
        <LinksList/>
        <AddLink/>
      </div>
    </div>
  );
};