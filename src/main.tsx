import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
