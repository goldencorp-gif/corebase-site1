import { Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden blueprint-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.5em] font-black text-lg mb-6">Our Legacy</h2>
          <h1 className="text-6xl md:text-8xl font-bold font-oswald uppercase mb-8 tracking-tighter leading-none">Built on <br />Performance</h1>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-left">
            <div>
              <h2 className="text-4xl font-bold font-oswald uppercase text-slate-900 mb-10 tracking-tight flex items-center gap-4">
                The Structural Core
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                CoreBase Construction is a specialist foundation contractor serving Victoria's residential and commercial development sectors. 
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="w-full h-80 structural-border">
                <img src="https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Site" />
              </div>
              <div className="w-full h-80 structural-border mt-12">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Slab" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white text-center">
        <Award className="text-yellow-500 mx-auto mb-10" size={64} />
        <h2 className="text-4xl font-bold font-oswald uppercase italic">"Foundations builders rely on."</h2>
      </section>

      <div className="h-[600px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale brightness-50" 
          alt="Site View" 
        />
      </div>
    </div>
  );
};

export default About;