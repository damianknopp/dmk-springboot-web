define(function(require) {
	'use strict';

	document.addEventListener('DOMContentLoaded', new function() {

		console.log("dom loaded!")
		document.getElementById("content").innerHTML = "dom loaded!"
		
		require(['jsx!app'], function(App){
			console.log(App)
			let app = new App();
			app.init();
		});

	}, false);

});