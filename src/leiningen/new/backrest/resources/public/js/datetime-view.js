define(['application', 'moment'], function() {
	Ember.Handlebars.helper("datetime-view", Ember.View.extend({
		template: Ember.Handlebars.compile("{{view.display}}"),

		value: null,

		display: function() {
			return moment(this.value).format("YYYY-MM-DD");
		}.property("value"),
	}));
});