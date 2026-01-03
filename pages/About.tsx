import { Award, BrainCircuit, MessageSquare, Ruler, HardHat } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden blueprint-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.5em] font-black text-lg mb-6">About Us</h2>
          <h1 className="text-6xl md:text-8xl font-bold font-oswald uppercase mb-8 tracking-tighter leading-none">Built on <br />Performance</h1>
        </div>
      </section>

      {/* About CoreBase Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-bold font-oswald uppercase text-slate-900 mb-8 tracking-tight border-l-4 border-yellow-500 pl-6">
                About CoreBase Construction
              </h2>
              <div className="text-slate-600 text-lg font-light leading-relaxed space-y-6">
                <p>
                  CoreBase Construction is a specialist foundation and groundworks contractor providing structurally compliant solutions for residential and commercial construction projects.
                </p>
                <p>
                  We understand that the success of any build depends on what happens below ground. That is why we focus on precision, compliance, and coordination—ensuring footings, slabs, and groundwork are completed accurately and ready for construction without delays or rework.
                </p>
                <p className="font-medium text-slate-800">
                  Our team works closely with builders, engineers, and site supervisors to deliver foundation systems that meet design intent, Australian Standards, and NCC requirements.
                </p>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
               <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-100 -z-10 translate-x-12 translate-y-12 rounded-sm"></div>
               <div className="structural-border h-[500px] w-full bg-white shadow-xl">
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Construction Team" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-oswald uppercase text-slate-900 tracking-tight">Our Approach</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BrainCircuit, title: "Engineering-led Thinking", desc: "Applied on every project to ensure structural integrity." },
                { icon: MessageSquare, title: "Clear Communication", desc: "Direct lines with builders and consultants at all stages." },
                { icon: Ruler, title: "Accurate Set-outs", desc: "Precision tolerances to minimize rework and delays." },
                { icon: HardHat, title: "Safety-first Operations", desc: "Rigorous adherence to site safety protocols." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border-b-4 border-transparent hover:border-yellow-500 shadow-sm hover:shadow-lg transition-all group h-full">
                   <div className="mb-6 text-slate-400 group-hover:text-yellow-500 transition-colors">
                     <item.icon size={32} strokeWidth={1.5} />
                   </div>
                   <h3 className="font-oswald font-bold uppercase text-lg mb-2 text-slate-900">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f7b731_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <Award className="text-yellow-500 mx-auto mb-10" size={64} />
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.3em] font-bold text-sm mb-8">Our Commitment</h2>
          <h3 className="text-2xl md:text-4xl font-bold font-oswald uppercase leading-normal tracking-wide">
            "We are committed to delivering foundations that builders can rely on and engineers can approve with confidence."
          </h3>
        </div>
      </section>

      {/* Bottom Image */}
      <div className="h-[400px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale brightness-75" 
          alt="Site View" 
        />
      </div>
    </div>
  );
};

export default About;