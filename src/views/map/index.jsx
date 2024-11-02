import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./styles.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

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
  const [currentPosition, setCurrentPosition] = useState(center);
  const [currentAirportIndex, setCurrentAirportIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAirportIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % airports.length;
        const start = airports[prevIndex].coordinates;
        const end = airports[nextIndex].coordinates;
        animateMarker(start, end);
        return nextIndex;
      });
    }, 3000); // Cambia la posición cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const animateMarker = (start, end) => {
    const duration = 3000; // Duración de la animación en milisegundos
    const frameRate = 60; // Cuadros por segundo
    const totalFrames = (duration / 1000) * frameRate;
    let frame = 0;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const lat = start[0] + (end[0] - start[0]) * progress;
      const lng = start[1] + (end[1] - start[1]) * progress;
      setCurrentPosition([lat, lng]);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div className={styles.main__container}>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "400px", width: "623px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={currentPosition} icon={airplaneIcon}></Marker>

        {airports.map((airport) => (
          <Marker key={airport.code} position={airport.coordinates}>
            <Popup>{airport.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <section>
        <h3>Hora: {}</h3>
        <table>
          <thead>
            <tr>
              <th>Parada</th>
              <th>Hora de Salida</th>
              <th>Tiempo de Espera</th>
              <th>Hora de Llegada</th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport, index) => (
              <tr key={airport.code}>
                <td>{airport.name}</td>
                <td>{airport.departure}</td>
                <td>
                  {Math.floor(airport.waitTime / 60)}h {airport.waitTime % 60}m
                </td>
                <td>{airports[(index + 1) % airports.length].departure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Map;
