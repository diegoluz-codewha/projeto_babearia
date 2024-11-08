function initMap() {
    const location = { lat: -8.11389, lng: -35.2915 }; // Exemplo de São Paulo

    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15,
        tilt: 45,
        mapTypeId: 'roadmap',
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Minha Barbearia'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Barbearia X</h3><p>Endereço: Rua Exemplo, 123<br>Telefone: (11) 1234-5678</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

// Inicializa o mapa ao carregar a página
window.onload = initMap;