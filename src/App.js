import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./router/home/Home"
import About from "./router/about/About"
import Cart from "./router/cart/Cart"
import Wishlist from "./router/wishlist/Wishlist"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>      
      <Footer/>
    </div>
  );
}

export default App;
