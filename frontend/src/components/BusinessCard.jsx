export default function BusinessCard({ data, onRegenerate }) {
  if (!data) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
      <p className="text-xl font-semibold">⭐ {data.rating} Rating</p>
      <p>{data.reviews} Reviews</p>
      <p className="italic mt-2">"{data.headline}"</p>
      <button
        onClick={onRegenerate}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}
