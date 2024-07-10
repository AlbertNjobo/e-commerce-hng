import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import ProductGrid from './components/productGrid/ProductGrid';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const products = [
    { id: 1, name: 'Bold Beauty Special Lipstick', image: '/images/lipstick.png', price: 15 },
    { id: 2, name: 'Bold Beauty Foundation', image: '/images/foundation.png', price: 25 },
    { id: 3, name: 'Bold Beauty Brush Set', image: '/images/brush set.png', price: 38 },
    { id: 4, name: 'Bold Beauty Rejuvenating Scrub', image: '/images/scrub.png', price: 45 },
    { id: 5, name: 'Bold Beauty Serum', image: '/images/serum.png', price: 18 },
    { id: 6, name: 'Bold Beauty Cocoa Lotion', image: '/images/lotion.png', price: 18 },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductGrid products={products} />
          </>
        } />
        <Route path="/cart" element={<Cart products={products} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
