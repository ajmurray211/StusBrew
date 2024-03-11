import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Details from './pages/Details';
import Faq from './pages/Faq'
import Menu from './pages/Menu'
import Charities from './pages/Charities'
import Products from './pages/Products'
import { ProductContext } from './context/ProductContext';
import { useContext } from 'react';
import Success from './pages/Success';
import Item from './components/Item';

function App() {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <div className="App">
      <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/shop/:catagory' element={<Products />}></Route>
          <Route path='/shop/:catagory/:id' element={<Item />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/details" element={selectedProduct === null ? <Home /> : <Details />} />
          <Route path='/success' element={<Success />}></Route>
          <Route path='/charities' element={<Charities />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
