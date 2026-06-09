import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Products() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // 1. Filter the products based on search input
  let filteredProducts = productsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 2. Safely sort a copy of the array without mutating original data
  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container">
      <section className="hero">
        <h1>Smart Cart</h1>
        <p>Shop Better</p>
      </section>

      <div className="toolbar">
        {/* ✅ Fixed: Added curly braces for value and onChange */}
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* ✅ Fixed: Wrapped select onChange in curly braces */}
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Price Low</option>
          <option value="high">Price High</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.length === 0 ? (
          <div>No Products</div>
        ) : (
          filteredProducts.map((product) => (
            /* ✅ Fixed: Wrapped map loop props in curly braces */
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;