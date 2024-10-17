import Map from "./views/map";
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <>
      <h1>Gestor de tráfico aereo</h1>
      <div className="map-container">
        <Map></Map>
      </div>
      <h2>Hora: </h2>
      <table>
        <thead>
          <tr>
            <th>Parada</th>
            <th>Hora de Salida</th>
            <th>Tiempo de Viaje</th>
            <th>Tiempo de Espera</th>
            <th>Hora de Llegada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bogotá</td>
            <td>08:00</td>
            <td>1h 30m</td>
            <td>30m</td>
            <td>10:00</td>
          </tr>
          <tr>
            <td>Cali</td>
            <td>10:30</td>
            <td>1h 15m</td>
            <td>20m</td>
            <td>12:05</td>
          </tr>
          <tr>
            <td>Medellín</td>
            <td>12:25</td>
            <td>1h 45m</td>
            <td>25m</td>
            <td>14:35</td>
          </tr>
          <tr>
            <td>Cartagena</td>
            <td>14:00</td>
            <td>1h 30m</td>
            <td>15m</td>
            <td>16:45</td>
          </tr>
          <tr>
            <td>Bucaramanga</td>
            <td>17:00</td>
            <td>2h 00m</td>
            <td>30m</td>
            <td>19:30</td>
          </tr>
          <tr>
            <td>Leticia</td>
            <td>20:00</td>
            <td>2h 30m</td>
            <td>15m</td>
            <td>23:45</td>
          </tr>
          <tr>
            <td>Bogotá</td>
            <td>00:00</td>
            <td>2h 30m</td>
            <td>-</td>
            <td>02:30</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
