import { Map, TileLayer, Marker } from "../../node__module/leafLet/leaflet-src.esm.js";
const renderMap = (mapContent) => {
  let map = null;
  if (mapContent !== null) {
    map = new Map(mapContent).setView([50.06, 43.2379], 13);
  
  const layer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  const marker = new Marker([50.067788, 43.229034]).addTo(map);
  const popup = marker.bindPopup('место проживания')
  }
}

export { renderMap }