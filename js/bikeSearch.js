// var geocodeAddress = require('./../js/zipSearch.js').geocodeAddress;
// var dino = require('./../js/dino-interface.js');
// var geocoder = new google.maps.Geocoder();
//
//
// $(document).ready(function(){
//   $('#searchButton').click(function(){
//     var zip = $('#zipSearch').val();
//     $.get('https://bikeindex.org/api/v2/bikes_search/stolen?page=1&per_page=50&proximity=' + zip + '&proximity_square=100').then(function(response){
//       for (var i = 0; i < response.bikes.length; i++) {
//         //console.log(response.bikes[i]);
//         var contentString = 'Title: '+response.bikes[i].title+'<br><img src="'+response.bikes[i].large_img+'"/>';
//         var infowindow = new google.maps.InfoWindow({
//           content: contentString
//         });
//         var address = document.getElementById('zipSearch').value;
//         var latlong = new geocodeAddress(geocoder, address);
//         var myCenter = new google.maps.LatLng({lat: latlong.lat, lng: latlong.lng});
//         var marker = new google.maps.Marker({
//           position: myCenter,
//           map: map,
//           title: 'Uluru (Ayers Rock)'
//         });
//         marker.addListener('click', function() {
//           infowindow.open(map, marker);
//         });
//       }
//     });
//   });
// });
