import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const navigate = useNavigate();

  const registerUser = async (user) => {
    try {
      await axios.post("http://localhost:5000/add_user", user);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const user = { username, email, password };
    registerUser(user);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" required />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input type="password" id="confirmPassword" required />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
