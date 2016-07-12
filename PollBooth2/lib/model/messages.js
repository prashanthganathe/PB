message = new SimpleSchema({          
            message:      {  type: String,  optional: true,     label: "message",              max: 2000 },  
            messagetype:  {  type: String,  optional: true,     label: "messagetype",              max: 2000 },  
            touserid:     {  type: String,  optional: true,     label: "touserid",              max: 2000 },  
            description:  {  type: String,  optional: true,     label: "description",              max: 5000 }, 
            targeturl:    {  type: String,  optional: true,     label: "targeturl",              max: 5000 }, 
            createdat:    {  type: Date, defaultValue:new Date(), optional: true } ,
            validtill:    {  type: Date, defaultValue:new Date(), optional: true }  
        });

Messages  = new Mongo.Collection("messages");
Messages.attachSchema(group);


