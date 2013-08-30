/**
 * Created with JetBrains WebStorm.
 * User: rsalamat
 * Date: 8/20/13
 * Time: 5:30 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'appRouter'
], function($, _, Backbone, Router){
    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
