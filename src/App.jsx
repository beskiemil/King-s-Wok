import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "components/templates/MainLayout";
import HomePage from "views/HomePage";
import MenuPage from "views/MenuPage";
import LoginPage from "views/LoginPage";
import AboutPage from "views/AboutPage";
import ContactPage from "views/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
