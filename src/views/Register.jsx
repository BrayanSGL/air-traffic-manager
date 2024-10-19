export const RegisterScreen = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input type="password" id="confirmPassword" />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
