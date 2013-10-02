define(['application', 'datetime-view', 'models'], function() {
	App.AccountsRoute = Ember.Route.extend({
		model: function() {
			return this.get('store').findAll('account');
		},
	});

	//note that we don't need the AccountRoute anymore with Ember Data
});