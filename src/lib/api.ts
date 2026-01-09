import { Product } from "@/types/product"

const BASE_URL = "https://fakestoreapi.com"

/**
 * Fetch all products
 */
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

/**
 * Fetch a single product by ID
 */
export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}`)
  }

  return res.json()
}
