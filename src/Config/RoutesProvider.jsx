import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultTheme from "../Layout/DefaultTheme";
import LoadingTheme from "../Layout/LoadingTheme";

const Home = lazy(() => import("../Pages/Home"));
const Document = lazy(() => import("../Pages/Document"));

// React Router Dom Dinamik Sayfa Yapısı
const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingTheme />}>
        <Routes>
          <Route element={<DefaultTheme />}>
            <Route path="/" element={<Home />} />
            <Route path="/document" element={<Document />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesProvider;
