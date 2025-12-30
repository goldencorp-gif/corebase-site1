import { ShieldCheck, FileText, Calendar, Construction, HardHat, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden blueprint-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.3em] font-black text-lg mb-6">Partner With Us</h2>
          <h1 className="text-5xl md:text-7xl font-bold font-oswald uppercase mb-8 tracking-tighter leading-none">For Builders,<br/>Developers & Engineers</h1>
          
          <div className="max-w-3xl border-l-4 border-yellow-500 pl-8 py-2">
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-6">
                CoreBase Construction is built to support professional construction teams.
            </p>
            <p className="text-slate-400 leading-relaxed">
                We understand builder programs, inspection requirements, and the importance of delivering compliant foundations on time. Our processes are designed to reduce delays, minimise rework, and support smooth project progression.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-bold font-oswald uppercase text-slate-900 mb-12 tracking-tight">Why Partner With CoreBase</h2>
              <div className="space-y-8">
                {[
                    { title: "Engineer-aligned construction methods", icon: Construction, desc: "We follow engineering specs to the letter." },
                    { title: "Clear documentation and communication", icon: FileText, desc: "No guesswork. Just transparent reporting." },
                    { title: "Reliable scheduling and coordination", icon: Calendar, desc: "We hit our dates so you can hit yours." },
                    { title: "Professional, safety-compliant site operations", icon: HardHat, desc: "SWMS, PPE, and a clean site culture." }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                        <div className="bg-slate-100 p-4 shrink-0 h-fit group-hover:bg-yellow-500 transition-colors duration-300">
                            <item.icon className="text-slate-700 group-hover:text-slate-900" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1 uppercase tracking-wide text-slate-900">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            
            {/* Compliance Panel */}
            <div className="bg-slate-900 p-10 md:p-12 text-white relative overflow-hidden structural-border">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} />
              </div>
              <h3 className="text-2xl font-bold font-oswald uppercase text-yellow-500 mb-8 tracking-widest border-b border-white/10 pb-4">Compliance & Standards</h3>
              <ul className="space-y-6">
                {[
                  "Australian Standards",
                  "NCC requirements",
                  "Engineer and geotechnical specifications",
                  "Council and private inspection readiness"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="text-yellow-500 shrink-0" size={20} />
                    <span className="text-lg font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm italic">
                    "Our focus on compliance ensures seamless handovers to the next trade."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold font-oswald uppercase text-slate-900 mb-8 tracking-tight">Capability</h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Request our Capability Statement or speak with us about your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/contact" className="group bg-slate-900 text-white px-10 py-5 rounded-sm font-black uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-xl">
               Request Capability Statement
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;