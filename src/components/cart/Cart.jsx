import PropTypes from 'prop-types';
import CartProduct from './CartProduct.jsx';
import { useState } from 'react';

const Cart = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products.map(product => ({ ...product, quantity: 1 })));

  const handleIncrease = (id) => {
    setCartProducts(cartProducts.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const handleDecrease = (id) => {
    setCartProducts(cartProducts.map(product =>
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  return (
    <section className="py-16 px-6">
      <h1 className="text-6xl font-bold mb-8 text-left">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cartProducts.map(product => (
          <CartProduct
            key={product.id}
            product={product}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-gray-800 text-white px-8 py-4 rounded-md text-lg">Check Out</button>
      </div>
    </section>
  );
};

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Cart;
