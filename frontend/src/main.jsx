import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Layout } from "./mainLayout/Layout.jsx";
import CartProvider from "./context/CartProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ScrollToTop from "./components/scroll/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
