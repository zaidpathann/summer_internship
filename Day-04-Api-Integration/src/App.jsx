import { useEffect, useState } from "react"
import axios from "axios"

import ProductCard from "./components/ProductCard"

import "./App.css"

function App() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")

  const [search, setSearch] = useState("")

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await axios.get(
          "https://fakestoreapi.com/products"
        )

        console.log(response.data)

        setProducts(response.data)

      }
      catch (err) {

        console.log(err)

        setError("Failed To Fetch Products")

      }
      finally {

        setLoading(false)

      }
    }

    fetchProducts()

  }, [])

  const filteredProducts = products.filter((product) =>

    product.title
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  return (

    <div className="zp-container">

      <h1 className="zp-heading">
        API Integration Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search Products..."
        className="zp-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {

        loading ?

          <h2 className="zp-status">
            Loading Products...
          </h2>

          :

          error ?

            <h2 className="zp-error">
              {error}
            </h2>

            :

            <div className="zp-grid">

              {

                filteredProducts.map((product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                ))

              }

            </div>

      }

    </div>
  )
}

export default App