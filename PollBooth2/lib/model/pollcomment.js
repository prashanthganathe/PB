pollcomment = new SimpleSchema({           
            pollid:      {  type: String,  optional: true,     label: "Title",              max: 20},
            userid:      {  type: String,  optional: true,                 max: 2000 },   
            comment:     {  type: String,  optional: true,     label: "Title",              max: 200},       
            summited:    {  type: Date, defaultValue:new Date(), optional: true } 
              

      });
Pollcomments = new Mongo.Collection('pollcomments');
Pollcomments.attachSchema(pollcomment);