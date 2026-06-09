import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Sustainable Shopping</h1>
        <p>Thoughtfully selected products.</p>
      </section>

      <div className="grid">
        {products.map((product) => (
          // ✅ Fixed: Wrapped all props in curly braces
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
}

export default Products;