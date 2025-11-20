import { useEffect, useMemo, useState } from 'react';
import ListingCard from './ListingCard';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Explore() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [type, setType] = useState('');

  const fetchListings = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      if (type) params.set('type', type);
      const res = await fetch(`${API_BASE}/api/listings?${params.toString()}`);
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => items, [items]);

  return (
    <section id="explore" className="relative py-14 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Explore products</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search..." className="w-full sm:w-64 px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-300/60" />
          <select value={type} onChange={(e)=>setType(e.target.value)} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white">
            <option value="">All types</option>
            <option value="chatbot">Chatbots</option>
            <option value="webflow">Webflows</option>
            <option value="workflow">Workflows</option>
            <option value="template">Templates</option>
            <option value="other">Other</option>
          </select>
          <button onClick={fetchListings} className="px-4 py-2 rounded-xl bg-indigo-500 text-white">Search</button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-white/5 rounded-2xl animate-pulse" />
          ))
        ) : filtered.length ? (
          filtered.map((item) => <ListingCard key={item.id} item={item} />)
        ) : (
          <div className="col-span-full text-center text-slate-300">No products yet</div>
        )}
      </div>
    </section>
  );
}
