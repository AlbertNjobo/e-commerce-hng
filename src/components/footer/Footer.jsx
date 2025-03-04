import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#504F4F] text-white py-8 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-24 mb-6">
            <a href="#" className="text-black hover:text-gray-400">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaFacebookF size={30} />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaWhatsapp size={30} />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaTiktok size={30} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center border-gray-700 pt-6 w-full space-x-24 md:space-x-16 lg:space-x-32 font-inter text-lg">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Products</a>
            <a href="#" className="hover:text-gray-400">Cart</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
