"use client"

import { useEffect, useState } from "react"
import { fetchProducts } from "@/lib/api"
import { Product } from "@/types/product"
import ProductCard from "@/components/ProductCard"
import SearchBar from "@/components/SearchBar"
import CategoryFilter from "@/components/CategoryFilter"
import {useFavorites} from "@/hooks/useFavorites"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const {favorites,toggleFavorite, isFavorite} = useFavorites()
  const [showFavorites, setShowFavorites]= useState(false)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError("Failed to load products")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  // derive unique categories dynamically
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  )

  // combined filtering: search + category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "all" || product.category === category

     const matchesFavorite =
       !showFavorites || favorites.includes(product.id) 

    return matchesSearch && matchesCategory && matchesFavorite
  })

  if (loading) {
    return (
      <main className="p-6">
        <p className="text-center text-lg">Loading products...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="p-6">
        <p className="text-center text-red-500">{error}</p>
      </main>
    )
  }

  return (
    <main className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Product Explorer</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            categories={categories}
            selected={category}
            onChange={setCategory}
          />
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox"
                   checked={showFavorites}
                   onChange={(e) => setShowFavorites(e.target.checked)}
                   className ="accent-blue-600" />
                   Show Favorites 
          </label>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}
             product={product}
             isFavorite={isFavorite(product.id)}
             onToggleFavorite={toggleFavorite} />
          ))}
        </div>
      )}
    </main>
  )
}
