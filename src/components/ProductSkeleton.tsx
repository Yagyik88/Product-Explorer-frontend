export default function ProductSkeleton(){
    return (
        <div className="border rounded-xl bg-white p-4 shadow-sm animate-pulse">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>

            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        </div>
    )
}