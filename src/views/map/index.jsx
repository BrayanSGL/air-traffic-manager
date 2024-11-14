import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./styles.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Utils
import { getActualFlight } from "../../../utils/fligth";
import { clock } from "../../../utils/time";

// Consts
import { airports } from "../../constants/airports";

// Crear un nuevo icono para el marcador
const airplaneIcon = L.icon({
  iconUrl: "../../../public/airplane.svg", // Reemplaza con la ruta de tu imagen
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto del icono que corresponde a la posición del marcador
  popupAnchor: [1, -34], // Punto desde el cual se abrirá el popup relativo al icono
});

const Map = () => {
  const center = [4.711, -74.0721]; // Latitud y longitud de Bogotá
  const [currentPosition, setCurrentPosition] = useState(center);
  const [currentAirportIndex, setCurrentAirportIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlights();

    const time = clock();
    setCurrentTime(time);

    const intervalTime = setInterval(() => {
      const time = clock();
      setCurrentTime(time);
    }, 100);

    // const interval = setInterval(() => {
    //   setCurrentAirportIndex((prevIndex) => {
    //     const nextIndex = (prevIndex + 1) % airports.length;
    //     const start = airports[prevIndex].coordinates;
    //     const end = airports[nextIndex].coordinates;
    //     animateMarker(start, end);
    //     return nextIndex;
    //   });
    // }, 3000); // Cambia la posición cada 3 segundos

    return () => clearInterval(intervalTime);
  }, []);

  useEffect(() => {
    updateAirplanePosition(time);
  }, [flights]);

  const updateAirplanePosition = (time) => {
    const actualFlight = getActualFlight(time, flights);
    console.log("🥑 ~ updateAirplanePosition ~ actualFlight:", actualFlight);
  };

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

  const getFlights = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/flights`);
      console.log("🥑 ~ getFlights ~ response:", response);
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addRoute = async (user_id, flight_id) => {
    try {
      await axios.post(`http://127.0.0.1:5000/flights/${flight_id}/register`, {
        user_id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoutes = (event) => {
    event.preventDefault();
    console.log("shit");
    addRoute(1, 1);
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
        {/* 
        {airports.map((airport) => (
          <Marker key={airport.code} position={airport.coordinates}>
            <Popup>{airport.name}</Popup>
          </Marker>
        ))} */}
      </MapContainer>

      <section>
        <h3>Hora: {currentTime}</h3>
        <table>
          <thead>
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Tiempo de vuelo</th>
            </tr>
          </thead>
          <tbody>
            {flights?.map((flight, index) => (
              <tr key={flight.code}>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.duration}</td>

                <td>
                  <button onClick={handleRoutes}>Viajar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Map;
