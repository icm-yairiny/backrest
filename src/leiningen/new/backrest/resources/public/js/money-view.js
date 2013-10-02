define(['application'], function() {
	Ember.Handlebars.helper("money-view", Ember.View.extend({
		template: Ember.Handlebars.compile("{{view.displayAmount}}"),

		classNameBindings: ["isNegative:negative"],

		tagName: "strong",
		
		amount: null,

		displayAmount: function() {
			return this.amount.toFixed(2);
		}.property("amount"),

		isNegative: function() {
			return this.amount < 0;
		}.property("amount")
	}));
});