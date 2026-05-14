function initMap() {

    // Restaurant location (Toronto)
    const restaurant = { lat: 43.6532, lng: -79.3832 };

    // Create map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: restaurant
    });

    // Marker
    new google.maps.Marker({
        position: restaurant,
        map: map,
        title: "Sunny Bites"
    });

    // Get user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            const user = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();

            directionsRenderer.setMap(map);

            directionsService.route({
                origin: user,
                destination: restaurant,
                travelMode: google.maps.TravelMode.DRIVING
            }, function(result, status) {

                if (status === "OK") {
                    directionsRenderer.setDirections(result);
                } else {
                    alert("Directions failed: " + status);
                }

            });

        });
    }
}