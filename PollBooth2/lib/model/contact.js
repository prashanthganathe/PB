contact = new SimpleSchema({          
            name:         {  type: String,  optional: true,     label: "Name",              max: 2000 },  
            email:        {  type: String,  optional: true,     label: "Email",              max: 5000 }, 
            groupid:      {  type: String,  optional: true,     label: "Email",              max: 5000 }, 
            userid:       {  type: String,  optional: true,     label: "userid",              max: 2000 },  
            profile:      {  type: String,  optional: true,     label: "Profilemini",              max: 5000 }, 
            referredby:   {  type: String,  optional: true,     label: "Refferedby",              max: 5000 },             
            createdat:    {  type: Date, defaultValue:new Date(), optional: true }  
        });

Contacts  = new Mongo.Collection("contacts");
Contacts.attachSchema(contact);


if (Meteor.isServer) {
    Contacts.allow({
        insert: function(userId, doc) {
            return true;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function(userId, doc) {
            return true;
        }
    });

    Contacts.deny({
        insert: function(userId, doc) {
            return false;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function(userId, doc) {
            return false;
        }
    });
}