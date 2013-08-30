
require.config({
    paths: {
        jquery: 'lib/jquery-1.10.2',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        text: 'lib/text',
        jquerymobile : 'lib/jquery.mobile-1.3.2'
    }
});

require([
    // Load our app module and pass it to our definition function
    'app'
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});
