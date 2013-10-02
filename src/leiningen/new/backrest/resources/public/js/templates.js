define(
	[
	'ember',
	'text!templates/application.html',
	'text!templates/login.html',
	], 
function(x,
	application,
	login
	)
{
	Ember.TEMPLATES['application'] = Ember.Handlebars.compile(application);
	Ember.TEMPLATES['login'] = Ember.Handlebars.compile(login);
});