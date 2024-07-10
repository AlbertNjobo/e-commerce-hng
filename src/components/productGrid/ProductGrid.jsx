
import PropTypes from 'prop-types';

const ProductGrid = ({ products }) => {
  return (
    <section className="py-16 px-6 flex flex-wrap justify-center gap-10">
      {products.map(product => (
        <div key={product.id} className="text-center">
          <div className="relative w-[326.25px] h-[435px] bg-gradient-to-b from-[#454444] to-[#ABA9A9] rounded-[21.75px] p-6 shadow-md flex items-center justify-center">
            <div className="p-6 rounded-lg flex items-center justify-center h-72">
              <img src={product.image} alt={product.name} className="h-48 w-auto object-contain" />
            </div>
          </div>
          <p className="mt-4">{product.name}</p>
        </div>
      ))}
    </section>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
