Emailcron = new SimpleSchema({          
            title:        {  type: String,  optional: true,     label: "Title",              max: 2000 },  
            subject:      {  type: String,  optional: true,     label: "subject",              max: 5000 },
            body:         {  type: String,  optional: true,     label: "Body",              max: 5000000 },    
            name:         {  type: String,  optional: true,     label: "Name",              max: 50},    
            from:         {  type: String,  optional: true,     label: "from",              max: 500 },    
            to:           {  type: String,  optional: true,     label: "to",              max: 500 },    
            description:  {  type: String,  optional: true,     label: "Description",              max: 5000 },    
            templatename: {  type: String,  optional: true,     label: "Templatename",              max: 5000 },    
            attachment:   {  type: [String],  optional: true,   label: "attachmentlist",              max: 5000 },    
            jsonvalues:   {  type: Object,  optional: true,     label: "jsonvalues",              max: 5000 },    
            type:         {  type: String,  optional: true,     label: "Type",              max: 5000 },    
            starttime:    { type: Date, defaultValue:new Date(),label: "Start Time"},    
            expirytime:   { type: Date, defaultValue:new Date(),label: "Expiry Time"  },    
            status:       {  type: String,  optional: true,     label: "Status",              max: 50 },   
            retrycount   :{  type: Number,  optional: true,     label: "RetryCount",             defaultValue:0 },   
            failurereason:{  type: String,  optional: true,     label: "Reason for failure",              max: 500 },   
            createdat:    {  type: Date, defaultValue:new Date(), optional: true }  
        });

Emailcrons  = new Mongo.Collection("emailcrons");
Emailcrons.attachSchema(Emailcron);


if (Meteor.isServer) {
    Emailcrons.allow({
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

    Emailcrons.deny({
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