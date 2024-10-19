export const LoginScreen = () => {
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
