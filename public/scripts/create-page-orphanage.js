const map = L.map('mapid', options).setView([-20.5539479, -54.5805714], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconArchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-20.5539479, -54.5805714], { icon }).addTo(map);