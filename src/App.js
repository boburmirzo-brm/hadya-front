import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./router/home/Home"
import About from "./router/about/About"
import Cart from "./router/cart/Cart"
import Wishlist from "./router/wishlist/Wishlist"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Notefaund from './router/notefaund/Notefaund';
import Login from './router/login/Login';
import Cake from './router/cake/Cake';
import Sweet from './router/sweet/Sweet';
import FastFood from './router/fastfood/FastFood';
import Norin from './router/norin/Norin';
    
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cake' element={<Cake/>}/>
        <Route path='/sweet' element={<Sweet/>}/>
        <Route path='/fastfood' element={<FastFood/>}/>
        <Route path='/norin' element={<Norin/>}/>
        <Route path="*" element={<Notefaund/>} />
      </Routes>      
      <Footer/>
    </div>
  );
}

export default App;
