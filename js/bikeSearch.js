var getMarkerPosition = require('./../js/getMarkerPosition.js').getMarkerPosition;
var markers = [];

exports.addMarker = function(map, zip, geocoder){
  for(var j=0; j<markers.length; j++){
    markers[j].setMap(null);
  }
  markers = [];
  $.get('https://bikeindex.org/api/v2/bikes_search/stolen?page=1&per_page=3&proximity=' + zip + '&proximity_square=100').then(function(response){
    console.log(response);
    for (var i = 0; i < response.bikes.length; i++) {
      var myTitle = response.bikes[i].title;
      var stolenLocation = response.bikes[i].stolen_location;
      var image = response.bikes[i].large_img;
      getMarkerPosition(stolenLocation, myTitle, image, map, geocoder, markers);
    }
  });
};
