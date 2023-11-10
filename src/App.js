import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import HamburgerNav from './components/HamburgerNav.js';
import Nav from './components/Nav.js';
import Details from './pages/Details';
import Faq from './pages/Faq'
import Menu from './pages/Menu'
import Products from './pages/Products'
import { ProductContext } from './context/ProductContext';
import { useContext } from 'react';
import image from './Assets/images.jpg'
import Success from './pages/Success';
import NewsLetter from './components/NewsLetter';

function App() {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <div className="App">
      {/* <HamburgerNav /> */}
      <Nav/>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path="/details" element={selectedProduct === null ? <Home /> : <Details />} />
        </Routes>
      </div>
      <NewsLetter/>
    </div>
  );
}

export default App;
