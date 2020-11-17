//Create map

const map = L.map("mapid").setView([-3.1442911, -58.4300785], 15);

// Create and add tileLayer

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /* {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}*/
).addTo(map);

//Create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  //Create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minheight: 240,
  })
    .setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" >
  </a>`);
  //Create and add Marker
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup); /*A pretty CSS3 popup.<br> Easily customizable.*/
  /*.openPopup();*/
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMarker(orphanage);
});
