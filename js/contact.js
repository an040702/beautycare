		//Angular models vm and as 
      	angular.module('myApp', [])
  		.controller('AppController', [function() {
      		var vm = this;
          	vm.submit = function() {
              	console.log('Form is submitted with following user', vm.user);
              	alert("Thank you, we look forward to connecting!");
              	document.getElementById("myForm").reset();
        	};
      	}]);    	
// ==========================================================================>
		// Map API
  		var marker;
		function initMap() {
			var map = new google.maps.Map(document.getElementById('map'), {
			  zoom: 16,
			  center: {lat: 16.069431, lng: 108.222435}
			});
			marker = new google.maps.Marker({
			  map: map,
			  draggable: true,
			  animation: google.maps.Animation.DROP,
			  position: {lat: 16.069431, lng: 108.222435}
			});
			marker.addListener('click', toggleBounce);
		}
		function toggleBounce() {
			if (marker.getAnimation() !== null) {
			  marker.setAnimation(null);
			} else {
			  marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}