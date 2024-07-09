

const products = [
  { id: 1, name: 'Bold Beauty Special Lipstick', image: 'public/images/lipstick.png' },
  { id: 2, name: 'Bold Beauty Foundation', image: 'public/images/foundation.png' },
  { id: 3, name: 'Bold Beauty Brush Set', image: 'public/images/brush set.png' },
  { id: 4, name: 'Bold Beauty Rejuvenating Scrub', image: 'public/images/scrub.png' },
  { id: 5, name: 'Bold Beauty Serum', image: 'public/images/serum.png' },
  { id: 6, name: 'Bold Beauty Cocoa Lotion', image: 'public/images/lotion.png' },
];

const ProductGrid = () => {
  return (
    <section className="py-16 px-6 flex flex-wrap justify-center gap-10">
      {products.map(product => (
        <div key={product.id} className="text-center">
          <div
            className="relative w-[326.25px] h-[435px] bg-gradient-to-b from-[#454444] to-[#ABA9A9] rounded-[21.75px] p-6 shadow-md flex items-center justify-center"
          >
            <div className="p-6 rounded-lg flex items-center justify-center h-72">
              <img src={product.image} alt={product.name} className="h-48 w-auto object-contain" />
            </div>
          </div>
          <p className="mt-4">{product.name}</p>
        </div>
      ))}
    </section>
  );
}

export default ProductGrid;
