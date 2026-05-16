function ProductCard({ product }) {

  return (

    <div className="zp-card">
      
      <img
        src = {product.image}
        alt = {product.title}
        className = "zp-image"
      />

      <h2>
        {product.title}
      </h2>

      <p>
        💰 Price: ${product.price}
      </p>

      <p>
        📦 Category: {product.category}
      </p>

      <p>
        ⭐ Rating: {product.rating?.rate}
      </p>


    </div>
  )
}

export default ProductCard
