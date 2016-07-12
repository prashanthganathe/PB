Meteor.methods({
    'createUserWithRole': function(data) {
        var userId;
        Meteor.call('createUserNoRole', data, function(err, result) {
            if (err) {
                console.log(err);
                //return err;
            } else {
                console.log(result);
                Roles.addUsersToRoles(result, ['user']);
                var userId = result;

                var tokenRecord = {
                    token: Random.secret(),
                    address: data.email,
                    when: new Date()
                };
                Meteor.users.update({ _id: userId }, { $push: { 'services.email.verificationTokens': tokenRecord } });
                var verifyEmailUrl = Accounts.urls.verifyEmail(tokenRecord.token);
                console.log(verifyEmailUrl);
                return verifyEmailUrl;
            }
        });
    },
    'createUserNoRole': function(data) {
        //Do server side validation       
        console.log('in createuserNorole');
      return Accounts.createUser({
            email: data.email,
            username: data.email,
            password: data.password,
            profile: data.profile
        });

    }
});
