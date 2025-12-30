import { ShieldCheck, FileText, Calendar, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/10 skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.3em] font-semibold text-2xl mb-4">Professional Partnerships</h2>
          <h1 className="text-5xl md:text-6xl font-bold font-oswald uppercase mb-6 tracking-tight">For Builders & Developers</h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
            CoreBase Construction is built to support professional construction teams. We understand builder programs and inspection requirements.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-oswald uppercase text-slate-900 mb-8">Why Partner with CoreBase?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-slate-50 p-4 shrink-0 h-fit">
                    <Construction className="text-yellow-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Engineer-Aligned Methods</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Our construction methods are dictated by your engineering specifications, ensuring structural compliance from day one.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-slate-50 p-4 shrink-0 h-fit">
                    <FileText className="text-yellow-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Clear Documentation</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We provide detailed records and maintain open lines of communication with consultants and site supervisors.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-slate-50 p-4 shrink-0 h-fit">
                    <Calendar className="text-yellow-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Reliable Scheduling</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We sync with your project management software and milestones to ensure foundations are ready for framing.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-slate-50 p-4 shrink-0 h-fit">
                    <ShieldCheck className="text-yellow-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Safety Compliant</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Full SWMS documentation, insurances, and professional, safety-conscious site operations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-12 text-white">
              <h3 className="text-2xl font-bold font-oswald uppercase text-yellow-500 mb-6">Compliance & Standards</h3>
              <p className="text-slate-300 mb-8 text-sm">We strictly adhere to all relevant standards and requirements to facilitate smooth handovers and approvals.</p>
              <ul className="space-y-4">
                {[
                  "Australian Standards (AS 2870, AS 3600 etc.)",
                  "NCC (BCA) Requirements",
                  "Engineer & Geotechnical Specifications",
                  "Council & Private Inspection Readiness",
                  "WHS/OH&S Compliance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 border-b border-slate-800 pb-3 last:border-0">
                    <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                    <span className="text-sm font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-oswald uppercase text-slate-900 mb-8">Our Capability</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            From single custom builds to large-scale residential developments, we have the machinery, crew, and technical expertise to execute. Request our Capability Statement or speak with us about your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-slate-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
               Request Capability Statement
             </button>
             <Link to="/contact" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors">
               Discuss Your Project
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;