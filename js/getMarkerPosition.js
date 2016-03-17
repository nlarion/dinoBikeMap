exports.getMarkerPosition = function(stolenLocation, myTitle, image, map, geocoder, markers){
  geocoder.geocode({'address': stolenLocation}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var markerLocation = results[0].geometry.location;
      console.log(results[0].geometry.location);
      var contentString;
      if (image == null){
        contentString = 'Title: '+myTitle+'<br>';
      } else {
        contentString = 'Title: '+myTitle+'<br><img src="'+image+'"/>';
      }
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        map: map,
        position: markerLocation,
        myInfowindow: infowindow
      });
      marker.addListener('click', function() {
        this.myInfowindow.open(map, marker);
      });
      console.log(marker);
      markers.push(marker);
      } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
};
