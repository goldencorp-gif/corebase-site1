import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, AlertTriangle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'assistant' | 'user';
  content: string;
  isError?: boolean;
}

const FoundationAssistant: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am CoreBase AI Assistant. How can I help you with your foundation or groundworks project today? Tell me a bit about your project (e.g., residential home, townhouse development, or commercial site).' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'System Error: API Key is missing. Please ensure the API_KEY environment variable is set in your Vercel project settings.',
        isError: true
      }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const model = 'gemini-3-flash-preview';
      
      const response = await ai.models.generateContent({
        model,
        contents: [
          ...messages.filter(m => !m.isError).map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "You are a friendly and knowledgeable virtual assistant for CoreBase Construction, a foundation and groundworks specialist in Australia. Your goal is to help potential clients understand foundation types (strip footings, slabs, bored piers, etc.) and answer basic technical questions about excavation and groundworks based on CoreBase's services. Keep responses professional, helpful, and encourage them to request a formal quote or capability statement for detailed engineering analysis. If they ask about pricing, explain it depends on engineering drawings and soil reports. Refer to Australian Standards (AS 2870) where relevant.",
        }
      });

      const reply = response.text || "I'm sorry, I couldn't process that. Please try again or contact our team directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I am having some technical difficulties accessing the knowledge base. Please contact our team at corebasecons@gmail.com for immediate assistance.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 w-full sm:w-[400px] h-full sm:h-[600px] bg-white shadow-2xl z-50 flex flex-col border border-slate-200 overflow-hidden sm:rounded-lg animate-in slide-in-from-bottom duration-300">
      {/* Header */}
      <div className="bg-slate-900 p-4 text-white flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 p-2 rounded-full">
            <Bot size={20} className="text-slate-900" />
          </div>
          <div>
            <h3 className="font-oswald uppercase text-base font-bold tracking-wider leading-none">CoreBase Assistant</h3>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Project Expert AI</span>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-sm text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-yellow-500 text-slate-900 font-medium' 
                : m.isError 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
            }`}>
              {m.isError && <AlertTriangle size={14} className="inline mr-2 -mt-0.5" />}
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-sm flex items-center gap-2">
              <Loader2 className="animate-spin text-slate-400" size={16} />
              <span className="text-xs text-slate-400 font-medium">Assistant is thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-200 bg-white shrink-0">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your project query..."
            className="flex-grow bg-slate-50 border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-slate-900 text-yellow-500 p-2 rounded-sm disabled:opacity-50 transition-opacity"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center uppercase tracking-widest font-medium">CoreBase Technical AI v1.0</p>
      </div>
    </div>
  );
};

export default FoundationAssistant;