
exports.geocodeAddress = function(geocoder, resultsMap) {
   var address = document.getElementById('zipSearch').value;
   geocoder.geocode({'address': address}, function(results, status) {
     if (status === google.maps.GeocoderStatus.OK) {
       resultsMap.setCenter(results[0].geometry.location);
     } else {
       alert('Geocode was not successful for the following reason: ' + status);
     }
   });
};
