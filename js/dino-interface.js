var initMap = require('./../js/map.js').initMap;
var addMarker = require('./../js/bikeSearch.js').addMarker;
var geocodeAddress = require('./../js/zipSearch.js').geocodeAddress;
var geocoder = new google.maps.Geocoder();
var map;


$(document).ready(function(){
  map = new initMap();
  getDinos.then(fillContainer, oops);
  $('#searchButton').click(function(){
    var zip = $('#zipSearch').val();
    geocodeAddress(geocoder, map);
    addMarker(map, zip, geocoder);
  });
});

var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15'),
fillContainer = function(html) {
  $('#dinoText').html(html);
},
oops = function() {
  console.log('Where did all the dinosaurs go?');
};
