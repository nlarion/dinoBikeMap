
exports.addMarker = function(map, zip, geocoder){
  var markers = [];
  $.get('https://bikeindex.org/api/v2/bikes_search/stolen?page=1&per_page=100&proximity=' + zip + '&proximity_square=100').then(function(response){
    for (var i = 0; i < response.bikes.length; i++) {
      if (response.bikes[i].large_image == null){
        var contentString = 'Title: '+response.bikes[i].title+'<br>';
      } else {
        var contentString = 'Title: '+response.bikes[i].title+'<br><img src="'+response.bikes[i].large_img+'"/>';
      }
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markerLocation;
      geocoder.geocode({'address': zip}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          markerLocation = results[0].geometry.location;
          var marker = new google.maps.Marker({
            position: markerLocation
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          markers.push(marker);
          if (i === response.bikes.length){
            var mc = new MarkerClusterer(map, markers);
          }
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  });
}
