karma = new SimpleSchema({
           
            name:        {  type: String,  optional: true,     label: "Title",              max: 2000 },
            userid:      {  type: String,  optional: true,     label: "Title",              max: 2000 },
            points:      {  type: Number,  optional: true,     label: "Title",              max: 2000 },
            activity:    {  type: String,  optional: true,     label: "Title",              max: 2000 },
            activityDesc:{  type: String,  optional: true,     label: "Title",              max: 2000 },
            createdby:   {  type: String,  optional: true,                 max: 2000 } ,
            createdat:   {  type: Date, defaultValue:new Date(), optional: true }  
            
      
      });
Karmas = new Mongo.Collection('karma');
Karmas.attachSchema(karma);
