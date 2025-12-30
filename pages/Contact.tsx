import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 text-left">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-oswald uppercase mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Ready to start your next project on a solid foundation? Get in touch with CoreBase Construction today.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-8 border-b-2 border-yellow-500 pb-4 inline-block">Get In Touch</h3>
                
                <div className="space-y-8 mt-4">
                  <div className="flex gap-4">
                    <div className="bg-slate-900 text-yellow-500 p-3 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-slate-500 mb-1 font-bold">Call Us</p>
                      <p className="text-slate-900 font-bold">0413 866 829</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-slate-900 text-yellow-500 p-3 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-slate-500 mb-1 font-bold">Email Us</p>
                      <p className="text-slate-900 font-bold">corebasecons@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-slate-900 text-yellow-500 p-3 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-slate-500 mb-1 font-bold">Service Area</p>
                      <p className="text-slate-900 font-bold">Melbourne, VIC & Surrounding Regions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 text-white">
                <h4 className="font-oswald font-bold uppercase mb-4 text-yellow-500 text-lg">Office Hours</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex justify-between"><span>Mon - Fri:</span><span>9:00 AM - 5:00 PM</span></div>
                  <div className="flex justify-between"><span>Sat:</span><span>9:00 AM - 1:00 PM</span></div>
                  <div className="flex justify-between"><span>Sun:</span><span>Closed</span></div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 border border-slate-100 shadow-sm">
                <h3 className="text-3xl font-bold font-oswald uppercase text-slate-900 mb-4 tracking-tight">Request a Quote</h3>
                <p className="text-slate-500 mb-10">Provide your plans, engineering drawings, or project details and our team will respond promptly.</p>
                
                {submitted ? (
                  <div className="bg-green-50 text-green-800 p-8 rounded-sm text-center border border-green-100">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-2 font-oswald uppercase">Thank You!</h4>
                    <p>Your request has been sent. Our estimation team will review your plans and get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-green-700 font-bold uppercase text-sm border-b border-green-700 pb-1">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="e.g. John Smith" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Company (Optional)</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="e.g. Builders Group" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Email Address</label>
                        <input required type="email" className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Phone Number</label>
                        <input required type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="0412 345 678" />
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Project Type</label>
                      <select required className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-yellow-500 transition-colors">
                        <option value="">Select Project Type</option>
                        <option value="residential">Residential Home</option>
                        <option value="townhouse">Townhouse / Multi-Unit</option>
                        <option value="commercial">Light Commercial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2 text-left">
                      <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Project Description</label>
                      <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Tell us about your project requirements..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>Processing... <Loader2 className="animate-spin" size={20} /></>
                      ) : (
                        <>Send Quote Request <Send size={20} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Overview */}
      <section className="h-[400px] bg-slate-200">
        <div className="w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1600')] bg-cover grayscale brightness-50">
          <div className="bg-white/90 p-4 shadow-xl border-l-4 border-yellow-500">
             <p className="text-slate-900 font-oswald uppercase font-bold text-lg tracking-widest">Serving Greater Melbourne & Victoria</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;