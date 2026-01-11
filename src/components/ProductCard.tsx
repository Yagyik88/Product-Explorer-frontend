import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <div className="group relative rounded-xl bg-white border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Favorite button */}
      <div className="absolute top-3 right-3 z-10">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(product.id)}
        />
      </div>

      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          {/* Image section */}
          <div className="flex items-center justify-center h-48 bg-gray-50 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          {/* Content section */}
          <div className="p-4 flex flex-col h-full">
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">
                {product.title}
              </h2>

              <p className="text-xs text-gray-400 capitalize">
                {product.category}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-lg font-semibold text-gray-900">
                ₹ {product.price}
              </p>

              <span className="text-sm text-blue-600 font-medium">View →</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
