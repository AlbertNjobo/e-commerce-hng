

import './App.css'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import ProductGrid from './components/productGrid/ProductGrid';

function App() {

  const products = [
    { id: 1, name: 'Bold Beauty Special Lipstick', image: '/images/lipstick.png' },
    { id: 2, name: 'Bold Beauty Foundation', image: '/images/brush-set.png' },
    { id: 3, name: 'Bold Beauty Brush Set', image: '/images/cream.png' },
    { id: 4, name: 'Bold Beauty Rejuvenating Scrub', image: '/images/serum.png' },
    { id: 5, name: 'Bold Beauty Serum', image: '/images/skincare-set.png' },
    { id: 5, name: 'Bold Beauty Cocoa Lotion', image: '/images/skincare-set.png' },
  ];
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductGrid products={products} />
      <Footer/>
    </>
  )
}

export default App
