if (Meteor.isServer) {

    /*SyncedCron.add({
        name: 'Send Welcome Mail',
        schedule: function(parser) {
            return parser.text('every 50 minutes');
        },
        job: function(intendedAt) {
            console.log("Send Welcome Mail");
            var emailcronObjs = Emailcrons.find({ 'status': 'Pending',
                                                'starttime': { $lt: new Date() },
                                                'expirytime': { $gt: new Date() },
                                                'retrycount': { $lt: 4 }
                                                    }).fetch();

            for (var i = emailcronObjs.length - 1; i >= 0; i--) {

               Meteor.call('SendWelcomeMailCron', emailcronObjs[i], function(err, result) {
                    var status;
                    if (err) {                   
                     console.log('failed');   
                        console.log(emailcronObjs[i]._id);
                      
                        var failed=Emailcrons.update({'_id':emailcronObjs[i]._id},
                                {$set: {'failurereason':'failed'},$inc: {'retrycount': 1}});
                     
                    } else {
                        console.log('success');  
                        status = "Sent";
                        console.log(emailcronObjs[i]._id);
                        var success=Emailcrons.update({'_id':emailcronObjs[i]._id},
                                                      {$set: {'failurereason':'', 'status':'Success'}});   
                    }
                });
            }
        }
    });*/
}

