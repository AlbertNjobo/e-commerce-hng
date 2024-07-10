import PropTypes from 'prop-types';

const ProductGrid = ({ products }) => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
      {products.map(product => (
        <div key={product.id} className="text-center">
          <div className="relative w-full max-w-xs h-[350px] md:h-[400px] lg:h-[435px] bg-gradient-to-b from-[#454444] to-[#ABA9A9] rounded-[21.75px] p-6 shadow-md flex items-center justify-center mx-auto">
            <div className="p-6 rounded-lg flex items-center justify-center h-48 md:h-56 lg:h-72">
              <img src={product.image} alt={product.name} className="h-full w-auto object-contain" />
            </div>
          </div>
          <p className="mt-4 text-sm md:text-base lg:text-lg">{product.name}</p>
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
