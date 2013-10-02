define(['application'], function() {
	App.LoginController = Ember.ObjectController.extend({
		username: null,
		password: null,
		login: function() {
			var me = this;
			console.log('logging in', this.username, this.password);
			$.ajax({
				url: "/auth/login",
				type: "POST",
				data: {username: me.username, password: me.password},
			}).then(function(resp){
				if ( resp.success ) {
					me.transitionToRoute("accounts");
				}
				else {
					alert("wrong username or password");
				}
			}).fail(function(error) {
				alert("error logging in: %@".fmt(error));
			});
		}
	});
});