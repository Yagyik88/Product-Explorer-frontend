import { fetchProductById } from "@/lib/api"
import { Product } from "@/types/product"
import Link from "next/link"

interface ProductDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  // Next.js 15+/16: params is async
  const { id } = await params

  const product: Product = await fetchProductById(id)

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-6 shadow-sm">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-700 mb-4">
            {product.description}
          </p>

          <p className="text-lg font-semibold mb-2">
            Price: ₹ {product.price}
          </p>

          <p className="text-sm text-gray-500">
            Category: {product.category}
          </p>
        </div>
      </div>
    </main>
  )
}
