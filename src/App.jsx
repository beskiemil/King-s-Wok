import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QueryProvider from "providers/QueryProvider";
import AuthProvider from "providers/AuthProvider";
import MainLayout from "components/templates/MainLayout";
import HomePage from "views/HomePage";
import MenuPage from "views/MenuPage";
import LoginPage from "views/LoginPage";
import AboutPage from "views/AboutPage";
import ContactPage from "views/ContactPage";
import RegisterPage from "views/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryProvider>
    </BrowserRouter>
  );
}

export default App;
