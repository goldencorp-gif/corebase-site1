
import React from 'react';
import { Check } from 'lucide-react';

const ServiceDetail = ({ title, items, description, image }: { title: string, items: string[], description?: string, image: string }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0">
    <div className="order-2 lg:order-1">
      <h3 className="text-4xl font-bold font-oswald uppercase text-slate-900 mb-6 tracking-tight">{title}</h3>
      {description && <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">{description}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 group">
            <div className="bg-yellow-500/10 p-1.5 rounded-sm mt-0.5 group-hover:bg-yellow-500 transition-all">
                <Check size={16} className="text-yellow-600 group-hover:text-slate-900" />
            </div>
            <span className="text-slate-700 font-medium tracking-wide text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="order-1 lg:order-2 h-[450px] overflow-hidden structural-border shadow-2xl">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 transform hover:scale-105" />
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.4em] font-black text-lg mb-6">Structural Expertise</h2>
          <h1 className="text-6xl md:text-8xl font-bold font-oswald uppercase mb-8 tracking-tighter leading-none">The Scope of Work</h1>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceDetail 
            title="Excavation & Site Preparation"
            image="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=1200"
            description="Structural integrity begins with correct site geometry. We deliver precise cuts and levels tailored to your specific engineering requirements."
            items={["Bulk Earthworks", "Site Benching", "Trenching", "Compaction"]}
          />

          <ServiceDetail 
            title="Footings & Structural Foundations"
            image="https://images.unsplash.com/photo-1590644300530-395cc0c8278b?auto=format&fit=crop&q=80&w=1200"
            description="We bridge the gap between architectural vision and physical strength."
            items={["Bored Piers", "Strip Footings", "Pad Foundations", "Retaining Beams"]}
          />

          <ServiceDetail 
            title="Concrete Slabs"
            image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
            description="Execution of high-tolerance floor systems."
            items={["Waffle Slabs", "Raft Foundations", "Plumbing Prep", "Mesh Reinforcement"]}
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
