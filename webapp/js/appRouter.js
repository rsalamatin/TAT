define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'login': 'login',
            'register': 'register'
        },

        login: function(){
            require(['view/loginView'],function(LoginView){
                $('#content').html(new LoginView().render().el);
            });
        },

        register: function(){
            require(['view/registerView'],function(RegisterView){
                $('#content').html(new RegisterView().render().el);
            });
        }

    });

    var initialize = function(){
        var appRouter = new AppRouter;
        Backbone.history.start();
        appRouter.navigate("#login", {trigger: true});
    };

    return {
        initialize: initialize
    };
});