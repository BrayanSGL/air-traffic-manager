import { Routes, Route, HashRouter } from "react-router-dom";

// Screens
import Map from "./views/map";
import { UsersScreen } from "./views/Users";
import { RegisterScreen } from "./views/Register";
import { LoginScreen } from "./views/Login";

export const Router = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/users" element={<UsersScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </HashRouter>
  );
};
