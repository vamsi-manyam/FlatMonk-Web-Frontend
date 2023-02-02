import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../view/Home";
import Flat from "../view/flat";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/flat" element={<Flat />} />
      <Route path="/home" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
