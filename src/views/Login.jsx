import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const loginUser = async (user) => {
    try {
      // Realiza la solicitud de inicio de sesión y guarda la respuesta
      const response = await axios.post("http://localhost:5000/auth/login", user);

      // Guarda el usuario y el token en el localStorage
      const { data } = response;
      localStorage.setItem("user", JSON.stringify(data.user));  // Guardamos el usuario
      localStorage.setItem("token", data.token);  // Guardamos el token de autenticación

      // Redirige a la página principal
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const user = { email, password };
    loginUser(user);
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
