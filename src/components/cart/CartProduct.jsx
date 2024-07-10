import PropTypes from 'prop-types';

const CartProduct = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="text-center mb-6">
      <div className="relative w-[326.25px] h-[435px] bg-gradient-to-b from-[#454444] to-[#ABA9A9] rounded-[21.75px] p-6 shadow-md flex items-center justify-center mx-auto">
        <img src={product.image} alt={product.name} className="h-48 w-auto object-contain" />
      </div>
      <h2 className="font-semibold text-lg mt-4">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center justify-center gap-4 mt-2">
        <button onClick={() => onDecrease(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
        <button className="bg-red-500 text-white px-6 py-2 rounded w-[200px]">Add to Cart</button>
        <button onClick={() => onIncrease(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">+</button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartProduct;
