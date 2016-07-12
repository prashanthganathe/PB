
Meteor.methods({
    SendWelcomeMailCron: function(emailcron) { //emailids are  array
        console.log('emailcron');
        console.log(emailcron);
        this.unblock();        

        SSR.compileTemplate('htmlEmail', Assets.getText('welcome.html'));
        console.log('after compiletemplate');

        var emailData = {
            title: emailcron.title,
            email: emailcron.to,
            name: emailcron.name,
            body: '',
            redirecturl: "http://pollbooth.co.in/useractivate",
            refurl: ''
        };
       var emailStatus= Email.send({
            to: emailcron.to, //"prashanthganathe@gmail.com",
            from: "noreply@wapp.co.in",
            subject: "Welcome to Wapp",
            html: SSR.render('htmlEmail', emailData)
        });
       console.log(emailStatus);
    }   

});
