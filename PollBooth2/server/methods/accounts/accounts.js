/*
Accounts.onCreateUser(function(options, user) {
    var result;

    user.profile = options.profile || {};
    //  if (options.profile) {
    //  user.profile = options.profile || {};
    if (typeof(user.services.google) == "undefined" && typeof(user.services.google) == "undefined") {
        user.profile.picture = 'http://www.sonniss.com/wp-content/uploads/edd/2015/08/17797.png';
        user.profile.email = user.username;
    }

    if (typeof(user.services.facebook) != "undefined") {
        result = Meteor.http.get("https://graph.facebook.com/me", {
            params: {
                access_token: user.services.facebook.accessToken
            }
        });
        if (!result.error && result.data) {
            user.profile.facebook = result.data;
            user.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
            user.profile.email = user.services.facebook.email;
        }
    }

    if (typeof(user.services.google) != "undefined") {
        user.profile.picture = user.services.google.picture;
        user.profile.email = user.services.google.email;
    }
 
    user.profile.phone = null; //Phone is blank when created    
        console.log('oncreateuser');
        console.log(user);
        return user;
 
});*/
/*
Accounts.config({
             sendVerificationEmail:true
         });
*/
/*Meteor.methods({
  sendVerificationLink() {
    let userId = Meteor.userId();
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }

    
  }
});*/