import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.validateNewUser( user => {
    const email = user.emails[0].address.trim();
    
    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({
        email
      });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }
    return true;
  });
});
