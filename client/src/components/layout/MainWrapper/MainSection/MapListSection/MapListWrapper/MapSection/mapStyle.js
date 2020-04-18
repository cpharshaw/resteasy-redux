
const MyStyle = [    
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#929292",
        "weight": 100
        // "visibility": "simplified"
      }
    ]
  },  
  {
    "featureType": "poi",
    // "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off",
        // "color": "#929292"
      }
    ]
  },  

  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, 
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

export default MyStyle;

// palette
// FFCB4E
// 536AD4
// FFA94E
// FF6A4E
// 43DB76
// 44616A