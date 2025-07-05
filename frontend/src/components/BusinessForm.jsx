import { useState } from 'react';

export default function BusinessForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) return alert("Please fill all fields");

    setLoading(true);

    // Simulate a 1-second loading spinner
    setTimeout(async () => {
      try {
        await onSubmit({ name, location });
      } catch (error) {
        console.error("Submission failed:", error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer flex justify-center items-center gap-2"
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Loading...</span>
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

