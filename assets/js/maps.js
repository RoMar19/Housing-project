function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {
          lat: 40.4165001,
          lng: -3.7025599
      } 
    });

var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            var locations = [
             { lat: 40.408183, lng: -3.648301 }, 
             { lat: 40.48225, lng: -3.711614 }, 
             { lat: 40.3499985, lng: -3.766876 },
             { lat: 40.4145661, lng: -3.7029622 },
             ];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }      