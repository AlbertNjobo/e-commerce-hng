import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center gap-5 px-4 py-2 border border-solid rounded-2xl mt-2 mb-6 mx-3 border-black">
      <img
        src="/images/Group 8.png"
        alt="Logo"
        className="h-16 w-18 object-contain md:ml-4 md:mt-0"
      />
      
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`fixed top-0 right-0 h-full w-2/3 bg-white z-20 flex flex-col items-center justify-center transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:relative md:flex md:flex-row md:gap-16 md:text-xl md:justify-center md:items-center md:static md:bg-transparent md:translate-x-0`}>
        <button className="absolute top-4 left-4 text-black focus:outline-none md:hidden" onClick={toggleMenu}>
          <FaTimes size={30} />
        </button>
        <li className="mb-6 md:my-0 md:mr-6">
          <Link to="/" className="text-black hover:text-gray-700 font-medium" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="mb-6 md:my-0 md:mr-6">
          <Link to="/products" className="text-black hover:text-gray-700 font-medium" onClick={toggleMenu}>Products</Link>
        </li>
        <li className="mb-6 md:my-0 md:mr-6">
          <Link to="/cart" className="text-black hover:text-gray-700 font-medium" onClick={toggleMenu}>Cart</Link>
        </li>
        <li className="mb-6 md:my-0">
          <Link to="/contact" className="text-black hover:text-gray-700 font-medium" onClick={toggleMenu}>Contact Us</Link>
        </li>
        <li className="mt-auto mb-10 md:hidden flex justify-center w-full">
          <button className="text-black border border-transparent bg-transparent px-4 py-2 rounded-md focus:outline-none">Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
