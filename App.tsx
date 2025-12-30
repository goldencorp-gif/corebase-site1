import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  HardHat, 
  Building2, 
  ShieldCheck, 
  Timer, 
  Hammer,
  MessageSquareText,
  Images,
  Handshake,
  Landmark,
  Compass,
  Layers,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import FoundationAssistant from './components/FoundationAssistant';

// Default configuration for initial state and fallback
const DEFAULT_CONFIG = {
  headerLogo: '/logo-header.png',
  footerLogo: '/logo-footer.png',
  defaultLogo: '/logo.png'
};

type SiteConfig = typeof DEFAULT_CONFIG;

const BrandLogo = ({ 
  primarySrc, 
  fallbackSrc, 
  className, 
  isFooter = false 
}: { 
  primarySrc: string; 
  fallbackSrc: string; 
  className?: string;
  isFooter?: boolean;
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    // Prevent infinite loop if fallback also fails
    if (img.src.includes(fallbackSrc)) {
      img.style.display = 'none';
      return;
    }
    
    img.src = fallbackSrc;
    
    // Apply footer-specific styles to the fallback logo (usually turning a colored logo white)
    if (isFooter) {
      img.classList.add('brightness-0', 'invert', 'opacity-80');
    }
  };

  return (
    <img 
      src={primarySrc} 
      alt="CoreBase Construction" 
      className={className}
      onError={handleError}
    />
  );
};

const Navigation = ({ config }: { config: SiteConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Builders & Developers', path: '/builders' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Info Bar */}
      <div className="bg-slate-900 text-slate-400 py-2 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-yellow-500" /> 0413 866 829
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-yellow-500" /> corebasecons@gmail.com
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-yellow-500" /> Serving Melbourne & Victoria
            </span>
            <div className="h-3 w-px bg-slate-700"></div>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-yellow-500" /> Mon - Fri: 9am - 5pm
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 md:h-36 transition-all duration-300">
            <div className="flex items-center shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                <BrandLogo 
                  primarySrc={config.headerLogo} 
                  fallbackSrc={config.defaultLogo}
                  className="h-24 md:h-32 w-auto object-contain transition-all duration-500"
                />
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-black uppercase tracking-widest transition-all relative py-2 group ${
                    location.pathname === link.path ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3 rounded-sm text-sm font-black uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 transform active:scale-95 shadow-lg shadow-slate-900/10"
              >
                Request a Quote
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300 absolute w-full left-0 top-28 shadow-xl">
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-sm text-sm font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'bg-yellow-500 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-6 bg-slate-900 text-white px-6 py-4 rounded-sm text-xs font-black uppercase tracking-widest shadow-xl"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer = ({ config }: { config: SiteConfig }) => (
  <footer className="bg-slate-900 text-slate-400 pt-24 pb-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-left mb-24">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="inline-block mb-10 group">
            <BrandLogo 
              primarySrc={config.footerLogo} 
              fallbackSrc={config.defaultLogo}
              className="h-24 md:h-32 w-auto object-contain transition-all"
              isFooter={true}
            />
          </Link>
          <p className="text-sm leading-relaxed mb-8 font-light text-slate-300">
            Specialist structural foundations and groundworks contractor. Delivering engineered strength for Victoria's leading residential and commercial builders.
          </p>
          <div className="flex gap-4">
            <div className="bg-slate-800 p-3 hover:bg-yellow-500 hover:text-slate-900 cursor-pointer transition-all"><Building2 size={18} /></div>
            <div className="bg-slate-800 p-3 hover:bg-yellow-500 hover:text-slate-900 cursor-pointer transition-all"><ShieldCheck size={18} /></div>
            <div className="bg-slate-800 p-3 hover:bg-yellow-500 hover:text-slate-900 cursor-pointer transition-all"><Hammer size={18} /></div>
          </div>
        </div>
        
        <div className="pt-4">
          <h4 className="text-white font-oswald uppercase tracking-[0.3em] text-sm font-black mb-8 pb-2 border-b border-yellow-500/30 inline-block">Navigation</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
            <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-500 transition-colors">Project Folders</Link></li>
            <li><Link to="/builders" className="hover:text-yellow-500 transition-colors">Builders & Developers</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="pt-4">
          <h4 className="text-white font-oswald uppercase tracking-[0.3em] text-sm font-black mb-8 pb-2 border-b border-yellow-500/30 inline-block">Capability</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
            <li className="flex items-center gap-2">Bulk Excavation</li>
            <li className="flex items-center gap-2">Piling & Bored Piers</li>
            <li className="flex items-center gap-2">Strip & Pad Footings</li>
            <li className="flex items-center gap-2">Structural Slabs</li>
            <li className="flex items-center gap-2">Site Prep & Leveling</li>
          </ul>
        </div>

        <div className="pt-4">
          <h4 className="text-white font-oswald uppercase tracking-[0.3em] text-sm font-black mb-8 pb-2 border-b border-yellow-500/30 inline-block">Inquiries</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4 group">
              <div className="bg-yellow-500/10 p-2 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all rounded-sm">
                <Phone size={16} />
              </div>
              <div>
                <span className="block text-xs font-black uppercase text-slate-500 mb-1">Office Line</span>
                <span className="text-white font-bold tracking-wider">0413 866 829</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="bg-yellow-500/10 p-2 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all rounded-sm">
                <Mail size={16} />
              </div>
              <div>
                <span className="block text-xs font-black uppercase text-slate-500 mb-1">Email Estimates</span>
                <span className="text-white font-bold tracking-wider">corebasecons@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="border-t border-slate-800 pt-16 pb-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-yellow-500 mb-2">
            <Handshake size={20} />
            <span className="font-oswald uppercase tracking-[0.4em] text-sm font-black">Strategic Partners</span>
          </div>
          <h3 className="text-white font-oswald uppercase text-3xl font-bold tracking-tight">Our Alliance Network</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a 
            href="https://www.1stmg.com.au" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative bg-slate-800/40 border border-slate-700/50 p-8 flex flex-col items-center text-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="bg-slate-900 p-5 rounded-full mb-6 group-hover:bg-white transition-colors duration-500 shadow-xl">
              <Landmark size={32} className="text-yellow-500 group-hover:text-slate-900 transition-colors" />
            </div>
            <h4 className="text-white font-bold font-oswald uppercase tracking-widest text-sm group-hover:text-slate-900">1st Mortgage Group</h4>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest group-hover:text-slate-800 font-black">Project Finance Experts</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase text-yellow-500 group-hover:text-slate-900">
              Launch Portal <ArrowUpRight size={14} />
            </div>
          </a>

          <a 
            href="https://www.8milesestate.com.au" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative bg-slate-800/40 border border-slate-700/50 p-8 flex flex-col items-center text-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="bg-slate-900 p-5 rounded-full mb-6 group-hover:bg-white transition-colors duration-500 shadow-xl">
              <Compass size={32} className="text-yellow-500 group-hover:text-slate-900 transition-colors" />
            </div>
            <h4 className="text-white font-bold font-oswald uppercase tracking-widest text-sm group-hover:text-slate-900">8 Miles Estate</h4>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest group-hover:text-slate-800 font-black">Development & Land</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase text-yellow-500 group-hover:text-slate-900">
              Launch Portal <ArrowUpRight size={14} />
            </div>
          </a>

          <a 
            href="https://www.lesector.com.au" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative bg-slate-800/40 border border-slate-700/50 p-8 flex flex-col items-center text-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="bg-slate-900 p-5 rounded-full mb-6 group-hover:bg-white transition-colors duration-500 shadow-xl">
              <Layers size={32} className="text-yellow-500 group-hover:text-slate-900 transition-colors" />
            </div>
            <h4 className="text-white font-bold font-oswald uppercase tracking-widest text-sm group-hover:text-slate-900">Le Sector</h4>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest group-hover:text-slate-800 font-black">Architecture & Design</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase text-yellow-500 group-hover:text-slate-900">
              Launch Portal <ArrowUpRight size={14} />
            </div>
          </a>
        </div>

        <div className="mt-20 text-center">
          <div className="text-xs text-slate-600 uppercase tracking-[0.4em] font-black leading-loose">
            &copy; {new Date().getFullYear()} CoreBase Construction • Professional Groundworks Specialists • Melbourne VIC
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showAssistant, setShowAssistant] = useState(false);
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);

  useEffect(() => {
    fetch('/site-settings.json')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Config not found');
      })
      .then(data => {
        if (data) setConfig(prev => ({ ...prev, ...data }));
      })
      .catch(err => {
        // Silently fail and use defaults
        console.debug('Using default site settings');
      });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation config={config} />
        <main className="flex-grow min-h-[500px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/builders" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer config={config} />
        
        {/* Floating AI Assistant Trigger */}
        <button 
          onClick={() => setShowAssistant(true)}
          className="fixed bottom-6 right-6 bg-slate-900 text-yellow-500 p-4 rounded-full shadow-2xl hover:bg-yellow-500 hover:text-slate-900 transition-all z-40 flex items-center gap-2 group border border-yellow-500/20"
        >
          <MessageSquareText size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold uppercase tracking-widest text-sm whitespace-nowrap">
            &nbsp;Project Assistant
          </span>
        </button>

        {showAssistant && (
          <FoundationAssistant onClose={() => setShowAssistant(false)} />
        )}
      </div>
    </Router>
  );
}
