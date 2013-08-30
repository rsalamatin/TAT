/**
 * Created with JetBrains WebStorm.
 * User: rsalamat
 * Date: 8/22/13
 * Time: 10:13 AM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/register.html'],
    function ($, _, Backbone, template) {
        var RegisterView = Backbone.View.extend({
            render: function(){
                var compiledTemplate = _.template(template);
                var $el = $(this.el);
                $el.html(compiledTemplate());
                return this;
            }
        });

    return RegisterView;
});