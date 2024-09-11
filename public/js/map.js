let mapKey = mapToken; // Replace with your actual API key
console.log(mapKey);

// Address to geocode
const address = ulocation;
console.log(address);
// Geocoding API request
fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&apiKey=${mapKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      // Extract latitude and longitude from the response
     
      const location = data.items[0].position;
      console.log(data);
      const lat = location.lat;
      const lng = location.lng;
      
      
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);

      // Initialize the platform object:
      var platform = new H.service.Platform({
        apikey: mapKey // Replace with your API key
      });

      // Get the default map layers:
      var defaultLayers = platform.createDefaultLayers();

      // Initialize a map:
      var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 10, // Set appropriate zoom level
          center: { lat: lat, lng: lng } // Use coordinates from geocoding
        }
      );

      // Enable the event system:
      var mapEvents = new H.mapevents.MapEvents(map);

      // Add event listeners:
      var behavior = new H.mapevents.Behavior(mapEvents);

      // Enable default UI:
      var ui = H.ui.UI.createDefault(map, defaultLayers);

      // Optional: Add a marker at the location
      var marker = new H.map.Marker({ lat: lat, lng: lng });
      map.addObject(marker);
    } else {
      console.error('No location found for the provided address.');
    }
  })
  .catch(error => console.error('Error:', error));

