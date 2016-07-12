Meteor.publish(null, function (){
  return Meteor.roles.find({})
});

Meteor.publish(null, function (){
  return Meteor.users.find({})
});

Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, { fields: { 
    'services.google.accessToken': 1, 
    'services.google.expiresAt': 1 
  }});
});

Meteor.publish('emailcrons', function() {
    return Emailcrons.find();
});

Meteor.publish('contacts', function() {
    return Contacts.find();
});

Meteor.publish('groups', function() {
    return Groups.find();
});

Meteor.publish('messages', function() {
    return Messages.find();
});
Meteor.publish('folders', function() {
    return Folders.find();
});

Meteor.publish('polls', function() {
    return Polls.find();
});

Meteor.publish('pollcomments', function() {
    return Pollcomments.find();
});

Meteor.publish('questionaires', function() {
    return Questionaires.find();
});

Meteor.publish('myquestionresult', function(qid) {
    return Questionaires.find({'_id':qid});
});

Meteor.publish('categories', function(id) {
    return Categories.find({'_id':id});
});
Meteor.publish('subcategories', function() {
    return Subcategories.find({});
});
Meteor.publish('karmas', function() {
    return Karmas.find({});
});
Meteor.publish('surveyquestions', function() {
    return Surveyquestions.find({});
});