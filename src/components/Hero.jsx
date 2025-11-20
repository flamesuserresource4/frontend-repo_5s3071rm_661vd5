import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-sm mb-6 backdrop-blur">
          AI Product Marketplace
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
          Discover, sell, and launch AI chatbots, workflows, and templates
        </h1>
        <p className="mt-6 text-slate-200/90 text-lg max-w-2xl mx-auto">
          A next‑gen marketplace where creators ship AI products and teams buy exactly what they need.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#create" className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition">
            Start selling
          </a>
          <a href="#explore" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition">
            Explore products
          </a>
        </div>
      </div>
    </section>
  );
}
