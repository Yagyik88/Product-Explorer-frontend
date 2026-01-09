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
      onClick={onToggle}
      aria-label="Toggle favorite"
      className="text-xl"
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  )
}
