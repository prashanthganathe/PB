folder = new SimpleSchema({          
            name:      {  type: String,  optional: true,     label: "Title",              max: 2000 },  
            owner:     {  type: String,  optional: true,     label: "Title",              max: 2000 },  
            description:  {  type: String,  optional: true,     label: "subject",              max: 5000 },            
            createdat:    {  type: Date, defaultValue:new Date(), optional: true } 
            
        });

Folders  = new Mongo.Collection("folders");
Folders.attachSchema(folder);
