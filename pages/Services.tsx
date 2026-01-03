import { Check, Truck, LayoutTemplate, Hammer, Ruler, Building, ArrowDownToLine, Layers, Shield } from 'lucide-react';

const ServiceDetail = ({ title, items, description, image, icon: Icon }: { title: string, items: string[], description?: string, image: string, icon?: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0">
    <div className="order-2 lg:order-1">
      <div className="flex items-center gap-4 mb-6">
        {Icon && <div className="bg-yellow-500 p-3 rounded-sm text-slate-900"><Icon size={24} /></div>}
        <h3 className="text-3xl md:text-4xl font-bold font-oswald uppercase text-slate-900 tracking-tight">{title}</h3>
      </div>
      {description && <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light border-l-4 border-yellow-500 pl-6">{description}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 group">
            <div className="bg-slate-100 p-1 rounded-full mt-1 group-hover:bg-yellow-500 transition-colors">
                <Check size={14} className="text-slate-600 group-hover:text-slate-900" />
            </div>
            <span className="text-slate-700 font-bold uppercase tracking-wide text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="order-1 lg:order-2 h-[400px] lg:h-[450px] overflow-hidden structural-border shadow-2xl relative group">
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden blueprint-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.4em] font-black text-lg mb-6">Our Services</h2>
          <h1 className="text-5xl md:text-7xl font-bold font-oswald uppercase mb-8 tracking-tighter leading-none">Scope of Works</h1>
          <p className="max-w-2xl text-slate-400 text-lg font-light leading-relaxed">
             Comprehensive structural foundation solutions tailored to Australian Standards.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceDetail 
            title="Excavation & Site Preparation"
            icon={Truck}
            image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
            items={[
              "Bulk and detailed excavation",
              "Site cuts and ground levelling",
              "Trenching and footing excavations"
            ]}
          />

          <ServiceDetail 
            title="Footings & Structural Foundations"
            icon={LayoutTemplate}
            image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200"
            items={[
              "Strip footings and pad footings",
              "Bored piers and pier systems",
              "Retaining wall footings",
              "Engineer-designed footing systems"
            ]}
          />

          <ServiceDetail 
            title="Concrete Slabs"
            icon={Hammer}
            image="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1200"
            items={[
              "Raft slabs",
              "Waffle slabs",
              "Pre-slab preparation and inspections",
              "Coordination with reinforcement and plumbing trades"
            ]}
          />

          <ServiceDetail 
            title="Groundworks & Pre-Construction"
            icon={Ruler}
            image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
            items={[
              "Set-out coordination",
              "Base preparation and compaction",
              "Build-ready site delivery"
            ]}
          />
        </div>
      </section>

      {/* NEW: Complex Substructures Section (High Margin) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f7b731_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
              <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm mb-2 block">Advanced Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase text-white tracking-tight">Complex Substructures</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
              <p className="max-w-3xl mx-auto mt-8 text-slate-400 font-light text-lg">
                For projects requiring deep excavation and engineered retention, CoreBase provides specialized end-to-end solutions.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Basements */}
              <div className="bg-slate-800 p-8 border border-slate-700 hover:border-yellow-500 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ArrowDownToLine size={100} />
                </div>
                <div className="relative z-10">
                  <div className="bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                    <ArrowDownToLine size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-white">Basement Construction</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Excavation & spoil removal</li>
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Bulk outs & detail digs</li>
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Drainage coordination</li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Retention */}
              <div className="bg-slate-800 p-8 border border-slate-700 hover:border-yellow-500 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={100} />
                </div>
                <div className="relative z-10">
                   <div className="bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                    <Shield size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-white">Retention Systems</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Capping beams</li>
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Shotcrete prep & coordination</li>
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Bored pier retention</li>
                  </ul>
                </div>
              </div>

               {/* Card 3: Suspended Slabs */}
               <div className="bg-slate-800 p-8 border border-slate-700 hover:border-yellow-500 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers size={100} />
                </div>
                <div className="relative z-10">
                   <div className="bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                    <Layers size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-white">Suspended Slabs</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Bondek & formwork systems</li>
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Multi-level residential</li>
                    <li className="flex items-start gap-2 text-sm"><span className="text-yellow-500 font-bold">/</span> Structural steel integration</li>
                  </ul>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block p-4 bg-yellow-500 rounded-full mb-6">
                <Building size={32} className="text-slate-900" />
            </div>
            <h2 className="text-4xl font-bold font-oswald uppercase text-slate-900 mb-12 tracking-tight">Project Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Custom Residential", desc: "Architectural homes requiring precision foundations and basements." },
                    { title: "Multi-Unit Developments", desc: "Townhouse sites with complex common property groundworks." },
                    { title: "Commercial & Industrial", desc: "Warehouses, factories, and heavy-duty hardstands." }
                ].map((type, i) => (
                    <div key={i} className="bg-white p-10 border border-slate-200 hover:border-yellow-500 transition-colors shadow-sm group">
                        <h3 className="font-oswald font-bold uppercase text-xl mb-4 text-slate-900 group-hover:text-yellow-600 transition-colors">{type.title}</h3>
                        <p className="text-slate-500 font-light">{type.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;