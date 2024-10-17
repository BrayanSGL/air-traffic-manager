import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Importar Popup
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Crear un nuevo icono para el marcador
const airplaneIcon = L.icon({
  iconUrl: "../../../public/airplane.svg", // Reemplaza con la ruta de tu imagen
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto del icono que corresponde a la posición del marcador
  popupAnchor: [1, -34], // Punto desde el cual se abrirá el popup relativo al icono
});

// Datos de los aeropuertos
const airports = [
  {
    name: "Aeropuerto Internacional El Dorado",
    code: "BOG",
    coordinates: [4.7, -74.15],
    departure: "08:00",
    flightTime: 90, // 1h 30m
    waitTime: 30, // 30m
  },
  {
    name: "Aeropuerto Internacional Alfonso Bonilla Aragón",
    code: "CLO",
    coordinates: [3.45, -76.53],
    departure: "10:30",
    flightTime: 75, // 1h 15m
    waitTime: 20, // 20m
  },
  {
    name: "Aeropuerto Internacional José María Córdova",
    code: "MDE",
    coordinates: [6.22, -75.59],
    departure: "12:25",
    flightTime: 105, // 1h 45m
    waitTime: 25, // 25m
  },
  {
    name: "Aeropuerto Internacional Rafael Núñez",
    code: "CTG",
    coordinates: [10.44, -75.51],
    departure: "14:00",
    flightTime: 90, // 1h 30m
    waitTime: 15, // 15m
  },
  {
    name: "Aeropuerto Internacional Palonegro",
    code: "BGA",
    coordinates: [7.13, -73.18],
    departure: "17:00",
    flightTime: 120, // 2h 00m
    waitTime: 30, // 30m
  },
  {
    name: "Aeropuerto Alfredo Vásquez Cobo",
    code: "LET",
    coordinates: [-4.19, -69.94],
    departure: "20:00",
    flightTime: 150, // 2h 30m
    waitTime: 15, // 15m
  },
  {
    name: "Aeropuerto Internacional El Dorado",
    code: "BOG",
    coordinates: [4.7, -74.15],
    departure: "00:00",
    flightTime: 150, // 2h 30m
    waitTime: 0, // Regreso a Bogotá
  },
];

const Map = () => {
  const center = [4.711, -74.0721]; // Latitud y longitud de Bogotá

  return (
    <div>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "400px", width: "623px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={airplaneIcon}></Marker>

        {airports.map((airport) => (
          <Marker
            key={airport.code}
            position={airport.coordinates}
          >
            <Popup>{airport.name}</Popup>{" "}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
