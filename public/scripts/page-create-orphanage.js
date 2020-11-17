//Create map

const map = L.map("mapid").setView([-3.1442911, -58.4300785], 14);

// Create and add tileLayer

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /*, {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}*/
).addTo(map);

//Create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//Create and add Marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Add o campo de fotos

function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o caontainer para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicioanda.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // Limpar o campo antes de adicioanar ao container de imagens
  input.value = "";
  //adicioanar o clone ao container de #images.
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // Limpar o campo
    span.parentNode.children[0].value = "";
    return;
  }
  // deletar o campo
  span.parentNode.remove();
}
//Select yes or no
function toggleSelect(event) {
  // retirar a class .active (Dos Botões)
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // colocar a class .active nesse botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o meu input hidden com o valor selecionado

  const input = document.querySelector('[name="open_on_weekends"]');

  // verificar se sim ou não

  input.value = button.dataset.value;
}

function validate(event) {
  //validar se lat e lng estão preenchidos
  const needsLatAndLng = false; //verificar / concertar

  if (needsLatAndLng) {
    event.preventDefault();
    alert("Selecione um ponto no mapa");
  }
}
