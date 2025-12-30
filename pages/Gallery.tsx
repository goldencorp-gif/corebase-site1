
import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Camera, Settings, X, Save, Lock, Unlock, 
  AlertCircle, ChevronLeft, ChevronRight, Play, Image as ImageIcon,
  Film, ExternalLink, LayoutGrid
} from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  media: MediaItem[];
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Multi-Unit Townhouse Foundation',
    category: 'Residential',
    description: 'Bored piers and strip footings for a 4-unit development. Includes site prep and drainage integration.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1590644300530-395cc0c8278b?auto=format&fit=crop&q=80&w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: '2',
    title: 'Bulk Site Excavation',
    category: 'Excavation',
    description: 'Full site cut and spoil removal for a light commercial warehouse project.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800' }
    ]
  }
];

const ADMIN_PASSWORD = 'CoreBase2025'; 

const Gallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  // Project Editor State
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editProject, setEditProject] = useState<Partial<Project>>({
    title: '',
    category: 'Residential',
    description: '',
    media: [{ type: 'image', url: '' }]
  });

  // Lightbox State
  const [activeFolder, setActiveFolder] = useState<Project | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('corebase_projects_v2');
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(DEFAULT_PROJECTS);
    }
    if (sessionStorage.getItem('corebase_admin_auth') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem('corebase_projects_v2', JSON.stringify(updatedProjects));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPass === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowLogin(false);
      sessionStorage.setItem('corebase_admin_auth', 'true');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('corebase_admin_auth');
    setShowAddForm(false);
    setEditingId(null);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMedia = (editProject.media || []).filter(m => m.url.trim() !== '');
    
    const projectData: Project = {
      id: editingId || Date.now().toString(),
      title: editProject.title || 'Untitled Project',
      category: editProject.category || 'Residential',
      description: editProject.description || '',
      media: cleanMedia.length > 0 ? cleanMedia : [{ type: 'image', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800' }]
    };

    if (editingId) {
      saveProjects(projects.map(p => p.id === editingId ? projectData : p));
    } else {
      saveProjects([projectData, ...projects]);
    }
    
    closeEditor();
  };

  const closeEditor = () => {
    setShowAddForm(false);
    setEditingId(null);
    setEditProject({ title: '', category: 'Residential', description: '', media: [{ type: 'image', url: '' }] });
  };

  const startEdit = (project: Project) => {
    setEditingId(project.id);
    setEditProject(project);
    setShowAddForm(true);
  };

  const addMediaField = () => {
    setEditProject({
      ...editProject,
      media: [...(editProject.media || []), { type: 'image', url: '' }]
    });
  };

  const updateMedia = (index: number, field: keyof MediaItem, value: string) => {
    const updatedMedia = [...(editProject.media || [])];
    updatedMedia[index] = { ...updatedMedia[index], [field]: value };
    setEditProject({ ...editProject, media: updatedMedia });
  };

  const removeMediaField = (index: number) => {
    const updatedMedia = (editProject.media || []).filter((_, i) => i !== index);
    setEditProject({ ...editProject, media: updatedMedia });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-left pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f7b731_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
          <div>
            <h2 className="text-yellow-500 font-oswald uppercase tracking-[0.3em] font-semibold text-2xl mb-4">Construction Archive</h2>
            <h1 className="text-5xl md:text-6xl font-bold font-oswald uppercase mb-6 tracking-tight">Project Folders</h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
              Explore our complete site documentation. Each folder contains high-resolution photos and video walkthroughs of our structural works.
            </p>
          </div>
          <button 
            onClick={() => isAdmin ? handleLogout() : setShowLogin(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all border ${
              isAdmin ? 'bg-yellow-500 text-slate-900 border-yellow-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            {isAdmin ? <Unlock size={18} /> : <Lock size={18} />}
            {isAdmin ? 'Admin: Logout' : 'Manage Folders'}
          </button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isAdmin && (
            <div className="mb-12 flex items-center justify-between bg-white p-6 shadow-sm border border-slate-200">
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-slate-800"
              >
                <Plus size={16} /> Create New Folder
              </button>
              <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-400 uppercase font-black tracking-widest">Management Enabled</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Folder Cover */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={project.media[0]?.url} 
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Media Count Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <LayoutGrid size={12} className="text-yellow-500" />
                    {project.media.length} Items
                  </div>

                  {/* Open Folder Button */}
                  <button 
                    onClick={() => { setActiveFolder(project); setActiveMediaIndex(0); }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/40"
                  >
                    <span className="bg-white text-slate-900 px-6 py-2 font-bold uppercase tracking-widest text-sm shadow-xl flex items-center gap-2">
                      Open Folder <ExternalLink size={14} />
                    </span>
                  </button>

                  {isAdmin && (
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button onClick={() => startEdit(project)} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-lg"><Settings size={14} /></button>
                      <button onClick={() => saveProjects(projects.filter(p => p.id !== project.id))} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 shadow-lg"><Trash2 size={14} /></button>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-yellow-600 mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-3 tracking-tight leading-none">{project.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Folder Viewer */}
      {activeFolder && (
        <div className="fixed inset-0 bg-slate-900/95 z-[200] flex flex-col">
          <div className="flex justify-between items-center p-6 text-white border-b border-white/10 shrink-0">
            <div className="text-left">
              <h3 className="font-oswald uppercase font-bold text-2xl tracking-tight text-yellow-500">{activeFolder.title}</h3>
              <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">Item {activeMediaIndex + 1} of {activeFolder.media.length}</p>
            </div>
            <button onClick={() => setActiveFolder(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={32} /></button>
          </div>

          <div className="flex-grow relative flex items-center justify-center p-4">
            {activeFolder.media.length > 1 && (
              <>
                <button 
                  onClick={() => setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : activeFolder.media.length - 1))}
                  className="absolute left-4 z-10 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <ChevronLeft size={48} />
                </button>
                <button 
                  onClick={() => setActiveMediaIndex((prev) => (prev < activeFolder.media.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 z-10 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            <div className="max-w-5xl w-full h-full flex items-center justify-center">
              {activeFolder.media[activeMediaIndex].type === 'image' ? (
                <img 
                  src={activeFolder.media[activeMediaIndex].url} 
                  className="max-h-full max-w-full object-contain animate-in fade-in zoom-in-95 duration-300" 
                  alt="Gallery item"
                />
              ) : (
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <p className="text-white flex items-center gap-3">
                    <Play size={48} /> Video Content Loading...
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 bg-black/40 text-white shrink-0 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-300 text-lg font-light leading-relaxed">{activeFolder.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Editor Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[250] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl my-8 rounded-sm shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center shrink-0">
              <h3 className="font-oswald uppercase font-bold text-xl tracking-tight">
                {editingId ? 'Edit Project Folder' : 'Create New Folder'}
              </h3>
              <button onClick={closeEditor}><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSaveProject} className="p-8 space-y-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Folder Name</label>
                  <input required value={editProject.title} onChange={e => setEditProject({...editProject, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 p-4 focus:border-yellow-500 outline-none" placeholder="e.g. Oak Street Foundations" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Category</label>
                  <select value={editProject.category} onChange={e => setEditProject({...editProject, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 p-4 focus:border-yellow-500 outline-none">
                    <option>Residential</option>
                    <option>Townhouse</option>
                    <option>Commercial</option>
                    <option>Excavation</option>
                    <option>Concrete Slab</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Project Summary</label>
                <textarea rows={2} value={editProject.description} onChange={e => setEditProject({...editProject, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 p-4 focus:border-yellow-500 outline-none" placeholder="Brief details about the project scope..." />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Media Assets (Images/Videos)</label>
                  <button type="button" onClick={addMediaField} className="text-yellow-600 font-bold text-xs uppercase flex items-center gap-1 hover:text-yellow-700">
                    <Plus size={14} /> Add Media Link
                  </button>
                </div>
                
                <div className="space-y-3">
                  {editProject.media?.map((item, idx) => (
                    <div key={idx} className="flex gap-2 group">
                      <select 
                        value={item.type} 
                        onChange={e => updateMedia(idx, 'type', e.target.value)}
                        className="bg-slate-100 border border-slate-200 p-3 text-xs font-bold uppercase"
                      >
                        <option value="image">IMG</option>
                        <option value="video">VID</option>
                      </select>
                      <input 
                        required
                        value={item.url} 
                        onChange={e => updateMedia(idx, 'url', e.target.value)}
                        className="flex-grow bg-slate-50 border border-slate-200 p-3 text-sm focus:border-yellow-500 outline-none" 
                        placeholder="Paste URL here..."
                      />
                      {editProject.media!.length > 1 && (
                        <button type="button" onClick={() => removeMediaField(idx)} className="p-3 text-slate-300 hover:text-red-600 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 italic font-medium">Tip: Use direct image links or YouTube URLs for videos.</p>
              </div>

              <div className="pt-6 flex gap-4">
                <button type="submit" className="flex-grow bg-slate-900 text-white font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                  <Save size={18} /> Save Folder
                </button>
                <button type="button" onClick={closeEditor} className="px-8 bg-slate-100 text-slate-600 font-bold uppercase tracking-widest py-4 hover:bg-slate-200">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Login Modal (Reusable from your prev version) */}
      {showLogin && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-[300] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-sm shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
            <div className="bg-slate-900 p-8 text-white text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={32} className="text-slate-900" />
              </div>
              <h3 className="font-oswald uppercase font-bold text-2xl tracking-tight">Project Management</h3>
              <p className="text-slate-400 text-sm mt-2">Enter the master password to access folder editing</p>
            </div>
            <form onSubmit={handleLogin} className="p-10 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-500 tracking-widest">Access Key</label>
                <input autoFocus type="password" value={loginPass} onChange={e => {setLoginPass(e.target.value); setLoginError(false);}} className={`w-full bg-slate-50 border ${loginError ? 'border-red-500 bg-red-50' : 'border-slate-200'} p-4 focus:border-yellow-500 outline-none transition-all`} placeholder="••••••••" />
                {loginError && <p className="text-red-600 text-xs font-bold uppercase mt-1">Incorrect Password</p>}
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-slate-800 transition-all">Verify & Unlock</button>
              <button type="button" onClick={() => setShowLogin(false)} className="w-full text-slate-400 font-bold uppercase text-xs tracking-widest mt-2">Back to Site</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
