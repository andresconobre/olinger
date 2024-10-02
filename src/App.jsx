import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Provider } from "./Context";

const Home = lazy(() => import("./Home/Home"));
const Products = lazy(() => import("./Products/Products"));
const ProductDetails = lazy(() => import("./Products/ProductDetails"));
const About = lazy(() => import("./About/About"));

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Suspense
          fallback={
            <div className="text-center text-white text-3xl font-semibold">
              Carregando...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="produtos" element={<Products />} />
            <Route path="produtos/:product" element={<ProductDetails />} />
            <Route path="sobre" element={<About />} />
          </Routes>
        </Suspense>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
