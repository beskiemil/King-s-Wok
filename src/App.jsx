import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "components/templates/MainLayout";
import HomePage from "views/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
