import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({ name: '', location: '' });

  const handleSubmit = async ({ name, location }) => {
    try {
      const res = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const result = await res.json();
      setForm({ name, location });
      setData(result);
    } catch (err) {
      console.error('Error submitting business data:', err);
      alert('Failed to connect to backend. Please make sure the server is running.');
    }
  };

  const handleRegenerate = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/regenerate-headline?name=${form.name}&location=${form.location}`
      );

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const result = await res.json();
      setData((prev) => ({ ...prev, headline: result.headline }));
    } catch (err) {
      console.error('Error regenerating headline:', err);
      alert('Could not regenerate headline. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">📊 Local Business Dashboard</h1>
      <BusinessForm onSubmit={handleSubmit} />
      <BusinessCard data={data} onRegenerate={handleRegenerate} />
    </div>
  );
}

export default App;
