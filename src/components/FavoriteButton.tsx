interface FavoriteButtonProps {
  isFavorite: boolean
  onToggle: () => void
}

export default function FavoriteButton({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onToggle()
      }}
      aria-label="Toggle favorite"
      className={`flex items-center justify-center w-8 h-8 rounded-full
        border transition-colors
        ${
          isFavorite
            ? "bg-red-500 border-red-500 text-white"
            : "bg-white border-gray-300 text-gray-400 hover:border-red-400 hover:text-red-400"
        }
      `}
    >
      ♥
    </button>
  )
}
