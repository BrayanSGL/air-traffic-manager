import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();
  
  const loginUser = async (user) => {
    try {
      await axios.post("http://localhost:5000/login", user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" required />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
