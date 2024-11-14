import { useEffect, useState } from "react";
import axios from "axios";

export const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
    <h1>Users</h1>
    {users.map((user) => (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
  
        <h3>Rutas</h3>
        <table>
          <thead>
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Hora</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {user.flights.map((flight,index) => (
              <tr key={index}>
                {/* <td>{flight.origen}</td>
                <td>{flight.destino}</td>
                <td>{flight.hora}</td> */}
                <td>origen</td>
                <td>destino</td>
                <td>hora</td>
                <td>estado</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>  
  );
};
