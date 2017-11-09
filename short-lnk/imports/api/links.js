import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  'links.insert'(url) {
    if(!this.userId) {
      throw new Meteor.Error('unauthorized');
    }
    
    const link = {
      url,
      userId: this.userId
    };
    
    new SimpleSchema({
      url: {
        label: 'Your link',
        type: String,
        regEx: SimpleSchema.RegEx.Url
      },
      userId: {
        type: String
      }
    }).validate(link);
    
    Links.insert(link);
  }
});