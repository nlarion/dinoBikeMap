
  exports.initMap = function(){
    return new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 12
    });
  };
