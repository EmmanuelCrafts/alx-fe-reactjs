const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow flex flex-col items-center animate-pulse">
      {/* Spinner */}
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
        <svg
          className="w-8 h-8 text-gray-400 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      </div>

      {/* Title placeholder */}
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>

      {/* Subtitle placeholder */}
      <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>

      {/* Paragraph lines */}
      <div className="h-3 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

export default SkeletonCard;
