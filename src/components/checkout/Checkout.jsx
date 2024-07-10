const Checkout = () => {
    return (
      <>
       <h1 className="text-4xl font-bold mb-8 justify-self-start">Check Out</h1>
<div className="px-8 flex flex-col ml-24">
          
        <section className="w-full max-w-xl">
     
          <form className="grid grid-cols-1 gap-12">
            <div className="grid grid-cols-2 gap-24">
              <div>
                <label className="block text-gray-700 mb-2">First Name *</label>
                <input
                  className="w-full px-4 py-2 bg-[#A5A3A3] text-white border border-gray-300 rounded-md"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name *</label>
                <input
                  className="w-full px-4 py-2 bg-[#A5A3A3] text-white border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <label className="block text-gray-700 mb-2">Address *</label>
                <input
                  className="w-full px-4 py-2 bg-[#A5A3A3] text-white border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">City/State *</label>
                <input
                  className="w-full px-4 py-2 bg-[#A5A3A3] text-white border border-gray-300 rounded-md"
                  type="text"
                  placeholder="City/State"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <label className="block text-gray-700 mb-2">Country *</label>
                <input
                  className="w-full px-4 py-2 bg-[#A5A3A3] text-white border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Country"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Postal Code *</label>
                <input
                  className="w-full px-4 py-2 bg-[#A5A3A3] text-white border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Postal Code"
                  required
                />
              </div>
            </div>
            <button className="w-[200px] h-[50px] bg-gray-200 text-black py-2 justify-self-center rounded-md mt-4 self-center">
              Save Address
            </button>
          </form>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span>Bold Beauty Rejuvenating Scrub</span>
                <span>$45</span>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 bg-gray-200 text-black rounded-md">-</button>
                  <span>1</span>
                  <button className="px-2 py-1 bg-gray-200 text-black rounded-md">+</button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span>Bold Beauty Brush Set</span>
                <span>$38</span>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 bg-gray-200 text-black rounded-md">-</button>
                  <span>1</span>
                  <button className="px-2 py-1 bg-gray-200 text-black rounded-md">+</button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span>Bold Beauty Special Lipstick</span>
                <span>$15</span>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 bg-gray-200 text-black rounded-md">-</button>
                  <span>2</span>
                  <button className="px-2 py-1 bg-gray-200 text-black rounded-md">+</button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span>Shipping Fee</span>
                <span>$15</span>
              </div>
            </div>
            <div className="flex justify-between items-center font-bold text-xl">
              <span>Total Order</span>
              <span>$138</span>
            </div>
          </div>
          <button className="w-[400] h-[72] bg-black text-white py-2 rounded-md my-8 ">
            Confirm Order
          </button>
        </section>
      </div>
      </>
      
    );
  };
  
  export default Checkout;
  