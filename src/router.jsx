import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import Map from "./views/map";
import { UsersScreen } from "./views/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/users" element={<UsersScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
