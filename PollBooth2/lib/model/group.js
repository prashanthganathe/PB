group = new SimpleSchema({          
            name:         {  type: String,  optional: true,     label: "Title",              max: 2000 }, 
            owneruserid:  {  type: String,  optional: true,     label: "Title",              max: 2000 },  
            contacts:     {  type:[String],  optional: true,     label: "subject",              max: 5000 }, 
            createdate:   {  type: Date, defaultValue:new Date(), optional: true }  
        });

Groups  = new Mongo.Collection("groups");
Groups.attachSchema(group);
