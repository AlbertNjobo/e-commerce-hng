

const Hero = () => {
  return (
    <section className="w-auto h-[726px] bg-cover bg-center mx-6 my-6" style={{ backgroundImage: 'url(/images/hero.png)' }}>
      <div className="max-w-2xl ml-[1.90rem] text-left text-white py-52 px-6 ">
        <h1 className="text-5xl font-bold text-7xl">Be Bold,<br />Be Beautiful <br/>with Bold Beauty</h1>
        <p className="text-lg my-6 ">We offer only the best products because the health of your skin is our priority</p>
        <div className="flex justify-start space-x-4 font-inter text-3xl font-semibold">
        <button className="bg-white text-gray-900 py-2 px-4 rounded-[30px] " style={{ width: '300px', height: '72px' }}>Go to Cart</button>
        <button className="bg-transparent text-white py-2 px-4 rounded-[30px] border-5" style={{ width: '300px', height: '72px', border: '5px solid #4A4949' }}>View Products</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
