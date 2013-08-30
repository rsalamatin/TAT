/**
 * Created with JetBrains WebStorm.
 * User: rsalamat
 * Date: 8/21/13
 * Time: 9:44 AM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/login.html'
], function ($, _, Backbone, template) {
    var LoginView = Backbone.View.extend({
        render: function(){
            var compiledTemplate = _.template(template);
            var $el = $(this.el);
            $el.html(compiledTemplate());
            return this;
        },

        events: {
            "click #login": "onLogin",
            "click #to-register": "toRegister"
        },

        onLogin: function(){
            console.log('onLogin');
        },

        toRegister: function(){
            Backbone.history.navigate('register', {trigger:true});
            console.log('to register');
        }
    });
    return LoginView;
});