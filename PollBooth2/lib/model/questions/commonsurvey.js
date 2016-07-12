surveyoption = new SimpleSchema({
    id: { type: String, optional: true, label: "Post Title", max: 2000 },
    option: { type: String, optional: true, label: "Post Title", max: 2000 }
});

surveyquestion = new SimpleSchema({
    question:  { type: String, optional: true, label: "Name", max: 2000 },
    options:   { type: [surveyoption], label: "options", optional: true },
    createdat: { type: Date, defaultValue: new Date(), optional: true }
});

Surveyquestions = new Mongo.Collection("surveyquestions");
Surveyquestions.attachSchema(surveyquestion);
