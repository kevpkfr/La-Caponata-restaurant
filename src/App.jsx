import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:name" element={<Category />} />
            <Route path="/producto/:id" element={<Product />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmacion" element={<OrderSuccess />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/nosotros" element={<About />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
