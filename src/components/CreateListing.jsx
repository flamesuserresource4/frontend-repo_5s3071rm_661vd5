import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function CreateListing() {
  const [form, setForm] = useState({
    title: '',
    type: 'chatbot',
    description: '',
    price: '0',
    tags: '',
    seller_name: '',
    seller_email: '',
    demo_url: '',
    thumbnail_url: ''
  });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      const payload = {
        ...form,
        price: parseFloat(form.price || '0'),
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean)
      };
      const res = await fetch(`${API_BASE}/api/listings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to create');
      setForm({ title: '', type: 'chatbot', description: '', price: '0', tags: '', seller_name: '', seller_email: '', demo_url: '', thumbnail_url: '' });
      setStatus('Created! Refreshing list...');
    } catch (e) {
      console.error(e);
      setStatus('Error creating listing');
    }
  };

  return (
    <section id="create" className="relative py-14 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Create a listing</h2>
      <form onSubmit={submit} className="grid grid-cols-1 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
        <input name="title" value={form.title} onChange={onChange} placeholder="Title" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" required />
        <select name="type" value={form.type} onChange={onChange} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white">
          <option value="chatbot">Chatbot</option>
          <option value="webflow">Webflow</option>
          <option value="workflow">Workflow</option>
          <option value="template">Template</option>
          <option value="other">Other</option>
        </select>
        <textarea name="description" value={form.description} onChange={onChange} placeholder="Description" rows={4} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={onChange} placeholder="Price (USD)" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" required />
          <input name="tags" value={form.tags} onChange={onChange} placeholder="Tags (comma separated)" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="seller_name" value={form.seller_name} onChange={onChange} placeholder="Your name" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" required />
          <input name="seller_email" type="email" value={form.seller_email} onChange={onChange} placeholder="Email" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="demo_url" value={form.demo_url} onChange={onChange} placeholder="Demo URL (optional)" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" />
          <input name="thumbnail_url" value={form.thumbnail_url} onChange={onChange} placeholder="Thumbnail URL (optional)" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white" />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium">Publish</button>
          <span className="text-slate-300 text-sm">{status}</span>
        </div>
      </form>
    </section>
  );
}
