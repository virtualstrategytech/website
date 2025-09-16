import { useState } from 'react';
import { Menu } from 'lucide-react';

// Bring your existing pages back into the app
import SolutionsPage from './pages/SolutionsPage';
import SupportManagementPage from './pages/SupportManagementPage';
import UpskillingAgentsPage from './pages/UpskillingAgentsPage';

type Page = 'home' | 'solutions' | 'support' | 'upskilling';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-200 bg-black">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-slate-800 md:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <h1 className="font-semibold">Virtual Strategy Tech</h1>

          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <button className="hover:text-white" onClick={() => setPage('home')}>About</button>
            <button className="hover:text-white" onClick={() => setPage('solutions')}>Solutions</button>
            <button className="hover:text-white" onClick={() => setPage('support')}>Support</button>
            <button className="hover:text-white" onClick={() => setPage('upskilling')}>Upskilling Agents</button>
          </nav>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 px-4 pb-3 pt-2 space-y-2">
            <button className="block w-full text-left py-1.5 hover:text-white" onClick={() => { setPage('home'); setMenuOpen(false); }}>About</button>
            <button className="block w-full text-left py-1.5 hover:text-white" onClick={() => { setPage('solutions'); setMenuOpen(false); }}>Solutions</button>
            <button className="block w-full text-left py-1.5 hover:text-white" onClick={() => { setPage('support'); setMenuOpen(false); }}>Support</button>
            <button className="block w-full text-left py-1.5 hover:text-white" onClick={() => { setPage('upskilling'); setMenuOpen(false); }}>Upskilling Agents</button>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {page === 'home' && (
          <section className="rounded-2xl border border-slate-800 p-6 text-slate-300">
            {/* If you have a Hero component, you can import and render it here */}
            <h2 className="text-xl font-semibold mb-2">Welcome</h2>
            <p className="text-slate-400">
              This is your original app content. Use the nav to view your pages.
            </p>
          </section>
        )}

        {page === 'solutions' && <SolutionsPage />}
        {page === 'support' && <SupportManagementPage />}
        {page === 'upskilling' && <UpskillingAgentsPage />}
      </main>
    </div>
  );
}
