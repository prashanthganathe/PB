FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {
    },
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: '404'
        });
    }
};

FlowRouter.route('/thankyou', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'thankyou'
        });
    }
});


FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'splash'
        });
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'login'
        });
    }
});
FlowRouter.route('/register', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'register'
        });
    }
});
FlowRouter.route('/home', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'home'
        });
    }
});

FlowRouter.route('/contactlist', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'contactlist'
        });
    }
});

FlowRouter.route('/grouplist', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'grouplist'
        });
    }
});

FlowRouter.route('/userprofile', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'userprofile'
        });
    }
});

FlowRouter.route('/surveyQlist', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'surveyQlist'
        });
    }
});

FlowRouter.route('/polllist', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'polllist'
        });
    }
});

FlowRouter.route('/addpoll', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'addpoll'
        });
    }
});

FlowRouter.route('/polldetail', {
    action: function() {
        BlazeLayout.render('mobilemainlayout', {
            content: 'polldetail'
        });
    }
});


