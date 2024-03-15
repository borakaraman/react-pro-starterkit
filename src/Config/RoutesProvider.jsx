import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";

const Home = lazy(() => import("../Pages/Home"));
const Document = lazy(() => import("../Pages/Document"));

// React Router Dom Dinamik Sayfa Yapısı
const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/document" element={<Document />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesProvider;
