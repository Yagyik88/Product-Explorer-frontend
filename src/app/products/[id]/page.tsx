export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import { fetchProductById } from "@/lib/api"
import { notFound } from "next/navigation"
import Link from "next/link"

interface ProductDetailsPageProps {
  params: {
    id: string
  }
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await fetchProductById(params.id)

  if (!product) {
    notFound()
  }

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
