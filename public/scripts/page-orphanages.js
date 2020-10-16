const map = L.map('mapid').setView([-20.5539479,-54.5805714], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);


const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58,68],
    iconArchor: [29,68],
    popupAnchor:[170,2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="../orphanage.html" class="choose-orphanages"><img src="./public/images/arrow-white.svg"/> </a> ')


L.marker([-20.5539479,-54.5805714],{icon}).addTo(map)
    .bindPopup(popup)
    