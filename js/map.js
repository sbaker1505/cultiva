let map;
function initMap() {
  const green = '#637d37';
  const blue = '#CDE4F7';
  const black = '#000000';
  const grey = '#6D6E71';
  const grey40 = '#d4d5d6';
  const white = '#ffffff';
  const yellow = '#dece25';

  map = new google.maps.Map(document.getElementById('map'), {
    disableDefaultUI: true,
    styles: [
          {
            elementType: 'geometry',
            stylers: [{color: white}]
          },
          {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{color: green}]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{color: white}]
          },
          {
            featureType: 'administrative.country',
            elementType: 'geometry.stroke',
            stylers: [{color: grey40}]
          },
          {
            featureType: 'administrative.province',
            elementType: 'all',
            stylers: [{"visibility": "off"}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: blue}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: grey}]
          }
        ]
  });


  let bounds = new google.maps.LatLngBounds();
  let infowindow = new google.maps.InfoWindow();

  for (i = 0; i < footer.length; i++) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(footer[i].contact.address.lat, footer[i].contact.address.long),
      map: map,
      icon: {
    		path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    		fillColor: yellow,
    		fillOpacity: 1,
    		strokeColor: black,
    		strokeWeight: 1,
        scale: .5
    	}
    });

    //extend the bounds to include each marker's position
    bounds.extend(marker.position);

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(footer[i].contact.address.city);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  //now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);

  //(optional) restore the zoom level after the map is done scaling
  let listener = google.maps.event.addListener(map, "idle", function () {
      map.setZoom(3);
      google.maps.event.removeListener(listener);
  });
}
