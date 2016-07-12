category = new SimpleSchema({
           
            name:        {  type: String,  optional: true,     label: "Title",              max: 2000 },
            createdby:   {  type: String,  optional: true,                 max: 2000 } ,
            createdat:    {  type: Date, defaultValue:new Date(), optional: true }  
            
      
      });
Categories = new Mongo.Collection('categories');
Categories.attachSchema(category);
