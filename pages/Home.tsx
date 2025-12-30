import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HardHat, 
  ShieldCheck, 
  Ruler,
  CheckCircle2,
  Construction,
  Building2,
  TrendingUp,
  MapPin
} from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HOME PAGE - HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-20 pb-32">
        {/* Visual Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="CoreBase Site Operations" 
            className="w-full h-full object-cover grayscale-[30%] brightness-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute inset-0 blueprint-dark opacity-20"></div>
          {/* Subtle animated light sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-transparent opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-yellow-500 text-slate-900 px-6 py-3 text-lg font-black uppercase tracking-[0.4em] mb-10 shadow-2xl animate-in slide-in-from-left duration-1000">
              <HardHat size={20} strokeWidth={3} /> Specialist Groundworks Contractor
            </div>

            {/* Ready-to-use Hero Copy */}
            <h1 className="text-6xl md:text-[110px] font-bold font-oswald uppercase leading-[0.85] mb-8 tracking-tighter text-white animate-in slide-in-from-bottom duration-1000 delay-100">
              Engineered <br /> 
              <span className="text-yellow-500 italic drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">Strength</span> <br /> 
              <span className="text-white/90">From The Ground Up</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-200">
              CoreBase Construction delivers precision structural foundations for Victoria's leading residential and commercial developers. <span className="text-white font-bold underline decoration-yellow-500 decoration-4 underline-offset-8">Strength starts here.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5 animate-in slide-in-from-bottom duration-1000 delay-300">
              <Link to="/contact" className="group relative bg-yellow-500 text-slate-900 px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-base hover:bg-white transition-all overflow-hidden flex items-center gap-3 shadow-[0_20px_40px_rgba(247,183,49,0.3)]">
                <span className="relative z-10">Request a Quote</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              
              <Link to="/services" className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-base hover:bg-white/20 transition-all flex items-center gap-3 group">
                View Capabilities
                <Construction size={18} className="text-yellow-500 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Core Stats / Social Proof */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 animate-in fade-in duration-1000 delay-500">
              <div className="space-y-1">
                <span className="block text-white font-oswald text-3xl font-bold">100%</span>
                <span className="text-xs text-slate-500 uppercase font-black tracking-widest">Compliance Rate</span>
              </div>
              <div className="space-y-1">
                <span className="block text-white font-oswald text-3xl font-bold">VIC</span>
                <span className="text-xs text-slate-500 uppercase font-black tracking-widest">Licensed Class</span>
              </div>
              <div className="space-y-1">
                <span className="block text-white font-oswald text-3xl font-bold">24/7</span>
                <span className="text-xs text-slate-500 uppercase font-black tracking-widest">Site Support</span>
              </div>
              <div className="space-y-1">
                <span className="block text-white font-oswald text-3xl font-bold">AS2870</span>
                <span className="text-xs text-slate-500 uppercase font-black tracking-widest">Engineering Std</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
           <span className="text-xs text-white uppercase tracking-[0.4em] font-black">Scroll to Explore</span>
           <div className="w-px h-12 bg-yellow-500"></div>
        </div>
      </section>

      {/* QUICK STATS BAR */}
      <div className="bg-slate-900 border-y border-white/5 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
             <div className="text-yellow-500 mb-2"><Building2 size={32} /></div>
             <p className="text-white font-oswald uppercase tracking-widest text-xl font-bold">Residential Excellence</p>
             <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">Custom Homes & Multi-Unit</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-x border-white/10">
             <div className="text-yellow-500 mb-2"><TrendingUp size={32} /></div>
             <p className="text-white font-oswald uppercase tracking-widest text-xl font-bold">Commercial Grade</p>
             <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">Light Industrial Foundations</p>
          </div>
          <div className="flex flex-col items-center gap-4">
             <div className="text-yellow-500 mb-2"><MapPin size={32} /></div>
             <p className="text-white font-oswald uppercase tracking-widest text-xl font-bold">Victoria Wide</p>
             <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">Serving All Metro & Regional</p>
          </div>
        </div>
      </div>

      {/* REMAINDER OF HOME CONTENT */}
      {/* ... keeping the services snapshot from before ... */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="font-oswald uppercase tracking-[0.5em] text-yellow-600 font-black text-lg mb-4">Core Competencies</h2>
              <p className="text-5xl font-bold font-oswald uppercase text-slate-900 tracking-tight leading-none">The Foundation Specialists</p>
            </div>
            <Link to="/services" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-slate-400 hover:text-yellow-600 transition-colors">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 text-left">
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-8 h-[500px] structural-border bg-slate-100 relative">
                <img src="https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=800" alt="Excavation Work" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
              </div>
              <h3 className="text-3xl font-bold font-oswald uppercase mb-2 tracking-tight">Bulk Excavation</h3>
              <p className="text-slate-500 text-base font-medium uppercase tracking-widest">Site Preparation & Benching</p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-8 h-[500px] structural-border bg-slate-100 relative">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Reinforcement Detail" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
              </div>
              <h3 className="text-3xl font-bold font-oswald uppercase mb-2 tracking-tight">Footing Systems</h3>
              <p className="text-slate-500 text-base font-medium uppercase tracking-widest">Bored Piers & Pad Foundations</p>
            </div>
            <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="overflow-hidden mb-8 h-[500px] structural-border bg-slate-100 relative">
                <img src="https://images.unsplash.com/photo-1590644300530-395cc0c8278b?auto=format&fit=crop&q=80&w=800" alt="Concrete Foundations" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
              </div>
              <h3 className="text-3xl font-bold font-oswald uppercase mb-2 tracking-tight">Structural Slabs</h3>
              <p className="text-slate-500 text-base font-medium uppercase tracking-widest">Waffle Pod & Raft Designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-40 bg-yellow-500 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold font-oswald uppercase text-slate-900 mb-12 tracking-tighter leading-none animate-bounce-slow">
            Ready to <br />Build Strong?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/contact" className="bg-slate-900 text-white px-20 py-8 rounded-sm font-black uppercase tracking-[0.3em] text-base hover:bg-white hover:text-slate-900 transition-all shadow-2xl scale-110 transform active:scale-100">
              Request Project Quote
            </Link>
          </div>
          <p className="mt-12 text-slate-900/60 font-black uppercase tracking-[0.3em] text-xs">Serving Greater Melbourne & Regional Victoria</p>
        </div>
      </section>
    </div>
  );
};

export default Home;