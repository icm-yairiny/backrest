define(['application'], function() {
	App.TransfersController = Ember.Controller.extend({
		needs: ['accounts'],
		accounts: Ember.computed.alias("controllers.accounts"),

		selectedAccountId: null,
		amount: null,
		to: null,

		execute: function() {
			var me = this;
			var theTransfer = {
				"account-id": this.selectedAccountId,
				amount: -1.0 * parseFloat(this.amount),
				description: "Transfer to %@".fmt(this.to)
			};
			
			Ember.$.ajax({
				url: "/data/transfers",
				type: "POST",
				data: theTransfer,
				success: function(resp) {
					me.transitionToRoute("accounts");
				}
			});
		
		}
	});
});