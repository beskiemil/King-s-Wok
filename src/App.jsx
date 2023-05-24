import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "providers/AuthProvider";
import CartProvider from "providers/CartProvider";
import ProductProvider from "providers/ProductProvider";
import MainLayout from "components/templates/MainLayout";
import HomePage from "views/HomePage";
import MenuPage from "views/MenuPage";
import LoginPage from "views/LoginPage";
import AboutPage from "views/AboutPage";
import ContactPage from "views/ContactPage";
import RegisterPage from "views/RegisterPage";
import AddProductPage from "views/AddProductPage";
import GridLayout from "components/templates/GridLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route element={<GridLayout />}>
                    <Route path="/menu" element={<MenuPage />} />
                  </Route>

                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/add_product" element={<AddProductPage />} />
                </Route>
              </Routes>
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
