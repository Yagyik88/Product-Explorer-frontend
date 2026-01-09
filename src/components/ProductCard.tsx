import { Product } from "@/types/product"
import FavoriteButton from "./FavoriteButton"
import Link from "next/link"

interface ProductCardProps {
  product: Product
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition relative">
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(product.id)}
        />
      </div>

      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain mb-4"
          />

          <h2 className="font-semibold text-sm line-clamp-2">
            {product.title}
          </h2>

          <p className="text-gray-600 mt-1">₹ {product.price}</p>
          <p className="text-xs text-gray-400">{product.category}</p>
        </div>
      </Link>
    </div>
  )
}
