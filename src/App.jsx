import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
// import PageNav from "./component/PageNav";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";

function App() {
  const [cities, setCites] = useState([]);
  const [loading, isLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        isLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCites(data);
        isLoading(false);
      } catch (error) {
        console.log(error.message);
      } finally {
        isLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} />} />
            <Route path="cities" element={<CityList cities={cities} />} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
