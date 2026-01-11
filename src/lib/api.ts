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
 * Fetch a single product by ID (PRODUCTION SAFE)
 * - Never throws
 * - Returns null on failure
 */
export async function fetchProductById(
  id: string
): Promise<Product | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/products/${id}`,
      { cache: "no-store" }
    )

    if (!res.ok) return null

    const text = await res.text()
    if (!text) return null

    return JSON.parse(text)
  } catch {
    return null
  }
}
