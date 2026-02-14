import React from 'react';
import { motion } from 'framer-motion';
import { PSYCH_CASE_STUDIES, TIMELINE, LINKTREE_URL } from '../constants';
import { Search, Brain, Activity, Layers, Link } from 'lucide-react';

const BioPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-4 md:p-8 space-y-12"
    >
      <header className="border-b border-white/10 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">The Alchemist of Adversity</h1>
        <div className="flex flex-wrap gap-4 font-mono text-xs text-hud-cyan items-center">
           <span>SUBJECT: TIMOTHY CHRISTIAN SPURLIN</span>
           <span className="hidden md:inline">|</span>
           <span>STATUS: BUILDING GLOBAL INFRASTRUCTURE</span>
           <span className="hidden md:inline">|</span>
           <span>ARCHETYPE: INTEGRATED SURVIVOR</span>
        </div>
        <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed text-sm">
            Timothy Christian Spurlin is a unique archetype in the modern world: the "Integrated Survivor." 
            His expertise is a synthesis of survival skills forged in the turbulent foster care system of Georgia, 
            high-stakes intelligence analysis in the USAF, and the physical precision of industrial trades. 
            He operates on a philosophy of "Break Down to Build Up."
        </p>
        <div className="mt-4">
            <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-black bg-hud-cyan px-4 py-2 rounded font-bold hover:bg-white transition-colors">
                <Link size={16} />
                ACCESS_NEURAL_LINKS
            </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Service Record (Timeline) - Spans 7 columns */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
            <Activity size={18} /> OPERATIONAL_TIMELINE
          </h2>
          <div className="relative border-l border-white/10 pl-8 space-y-10">
            {TIMELINE.map((event, i) => (
              <div key={i} className="relative group">
                <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-black ${
                    event.category === 'survival' ? 'bg-alert-red' : 
                    event.category === 'intel' ? 'bg-hud-cyan' : 
                    event.category === 'art' ? 'bg-purple-500' : 'bg-gray-400'
                }`} />
                <span className="block text-xs font-mono text-hud-cyan mb-1">{event.year}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-hud-cyan transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{event.description}</p>
                {event.verification && (
                   <div className="mt-2 text-[10px] font-mono text-tungsten bg-white/5 inline-block px-2 py-1 rounded">
                      <Search size={10} className="inline mr-1" /> VERIFIED: {event.verification}
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Psych Profiles & Skills - Spans 5 columns */}
        <div className="md:col-span-5 space-y-8">
           
           {/* Psych Profiles */}
           <div className="space-y-4">
               <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
                 <Brain size={18} /> PSYCH_PROFILES
               </h2>
               <div className="grid gap-4">
                  {PSYCH_CASE_STUDIES.map((study) => (
                    <div key={study.id} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:border-hud-cyan/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-mono text-alert-red border border-alert-red/30 px-1 rounded bg-alert-red/5">
                                CASE: {study.id}
                            </span>
                        </div>
                        <h3 className="text-white font-bold text-sm mb-1">{study.title}</h3>
                        <p className="text-xs font-mono text-gray-500 mb-2">SUBJECT: {study.subject}</p>
                        <p className="text-xs text-gray-300 leading-relaxed mb-2">{study.narrative}</p>
                        <div className="border-l-2 border-hud-cyan pl-2">
                            <p className="text-xs text-hud-cyan italic">"{study.analysis}"</p>
                        </div>
                    </div>
                  ))}
               </div>
           </div>

           {/* Skills Matrix */}
           <div className="space-y-4">
                <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
                    <Layers size={18} /> POLYMATH_PROFILE
                </h2>
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg space-y-4">
                    {[
                        { skill: "Software Engineering (Java/Python)", level: 90 },
                        { skill: "Manual Trades (Welding/Electric)", level: 85 },
                        { skill: "Intelligence Analysis (USAF)", level: 95 },
                        { skill: "Natural Medicine Research", level: 80 },
                        { skill: "Music & Arts", level: 75 }
                    ].map((item, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between text-xs font-mono mb-1">
                                <span className="text-gray-300">{item.skill}</span>
                                <span className="text-hud-cyan">{item.level}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full bg-hud-cyan"
                                />
                            </div>
                        </div>
                    ))}
                </div>
           </div>

        </div>

      </div>
    </motion.div>
  );
};

export default BioPage;