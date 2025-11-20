import Hero from './components/Hero';
import Explore from './components/Explore';
import CreateListing from './components/CreateListing';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Explore />
      <CreateListing />
      <footer className="py-10 text-center text-slate-400">Built with ❤️ for AI creators and teams</footer>
    </div>
  );
}

export default App
