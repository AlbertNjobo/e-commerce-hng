

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-[1.25rem] px-[1.00rem] py-[0.38rem] border-black border border-solid rounded-[40px] mt-2.5 mb-[1.50rem] mx-1.5 ">
      <img src="/images/Group 8.png" alt="Logo" className='ml-[0.63rem] mt-[0.25rem] h-[4.25rem] w-[4.50rem] self-end object-contain md:self-auto' />
      
      <ul className="flex justify-center gap-[4.00rem] text-2xl">
        <li className="mr-6">
          <a href="/" className="!text-black-900_7f hover:!text-black-900 font-inter">Home</a>
        </li>
        <li className="mr-6">
          <a href="/products" className="!text-black-900_7f hover:!text-black-900">Products</a>
        </li>
        <li className="mr-6">
          <a href="/cart" className="!text-black-900_7f hover:!text-black-900">Cart</a>
        </li>
        <li>
          <a href="/contact" className="!text-black-900_7f hover:!text-black-900 mr-[0.25rem]">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
