export default function ListingCard({ item }) {
  return (
    <div className="group bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-400/40 transition shadow-sm hover:shadow-indigo-500/10">
      {item.thumbnail_url ? (
        <img src={item.thumbnail_url} alt={item.title} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-amber-400/20" />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold line-clamp-1">{item.title}</h3>
          <span className="text-indigo-300 text-sm whitespace-nowrap">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-slate-300/80 text-sm line-clamp-2">{item.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(item.tags || []).slice(0,3).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">by {item.seller_name}</span>
          <a href={`mailto:${item.seller_email}`} className="text-xs text-indigo-300 hover:text-indigo-200">Contact</a>
        </div>
      </div>
    </div>
  );
}
