import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import About from "./router/about/About";
import Cart from "./router/cart/Cart";
import Wishlist from "./router/wishlist/Wishlist";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Notefaund from "./router/notefaund/Notefaund";
import Login from "./router/login/Login";
import Branches from "./router/branch/Branches";
import SingleProduct from "./router/single-product/SingleProduct";
import Admin from "./router/admin/Admin";
import SortCategory from "./router/sort-category/SortCategory";
import { ToastContainer } from "react-toastify";
import Auth from "./router/auth/Auth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:category" element={<SortCategory />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notefaund />} />
        <Route path="/admin" element={<Auth />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
