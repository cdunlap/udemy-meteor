import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

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
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true
    };
    
    new SimpleSchema({
      _id: {
        type: String
      },
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
  },
  'links.setVisibility'(_id, visible) {
    if(!this.userId) {
      throw new Meteor.Error('unauthorized');
    }
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({_id, visible});
    
    Links.update({_id, userId: this.userId}, {$set: {visible}});
  }
});