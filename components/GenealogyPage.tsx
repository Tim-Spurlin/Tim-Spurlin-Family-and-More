import React from 'react';
import { motion } from 'framer-motion';
import GenealogyGraph from './GenealogyGraph';
import MemoryVault from './MemoryVault';
import { Network, ScrollText, Database, ExternalLink } from 'lucide-react';
import { ANCESTRAL_STORIES, HERITAGE_ENGINE_URL } from '../constants';

const GenealogyPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 flex flex-col"
    >
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 shrink-0">
            <div className="flex items-center gap-4">
                <Network className="text-hud-cyan" size={32} />
                <div>
                    <h1 className="text-3xl font-bold text-white">Forensic Genealogy & Roots</h1>
                    <p className="text-xs font-mono text-gray-500">TRACKING THE SPURLIN / WOODSON / DUBOSE / MACDONALD LINEAGE</p>
                </div>
            </div>
             <a 
                href={HERITAGE_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded hover:border-hud-cyan/50 hover:bg-hud-cyan/5 transition-all group"
            >
                 <div className="text-right">
                    <span className="block text-[9px] text-gray-500 font-mono tracking-widest uppercase">Deep Dive View</span>
                    <span className="block text-sm font-bold text-white group-hover:text-hud-cyan transition-colors flex items-center justify-end gap-2">
                        HERITAGE ENGINE <ExternalLink size={12} />
                    </span>
                 </div>
                 <div className="h-8 w-8 rounded bg-black flex items-center justify-center border border-white/10 group-hover:border-hud-cyan transition-colors">
                    <Database className="text-gray-400 group-hover:text-hud-cyan transition-colors" size={16} />
                 </div>
            </a>
        </header>

        {/* Top Section: Graph and Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px] lg:h-[500px]">
            {/* Left: The Graph */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex flex-col h-full">
                <div className="p-2 border-b border-white/5 flex justify-between items-center">
                    <span className="text-xs font-mono text-hud-cyan">RELATIONSHIP_MAP_V2.0</span>
                    <span className="text-[10px] font-mono text-alert-red animate-pulse">LIVE DATA</span>
                </div>
                <div className="flex-grow relative overflow-hidden">
                    <GenealogyGraph />
                </div>
                <div className="p-2 text-[10px] font-mono text-gray-500 text-center">
                    Interactive Force-Directed Graph. Drag nodes to rearrange. Use timeline slider to view 1500s-2026.
                </div>
            </div>

            {/* Right: The Video Vault */}
            <div className="flex flex-col h-full overflow-hidden">
                <MemoryVault />
                
                <div className="mt-4 p-4 bg-alert-red/10 border border-alert-red/20 rounded-lg flex-grow overflow-y-auto custom-scrollbar">
                    <h3 className="text-alert-red font-bold text-sm mb-2">FAMILY NOTE:</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-2">
                        Grandpa Jim and Grandma Merle provided the only stability during the "Bootcamp" years. 
                        Their home in Vienna, GA (Tippetville Rd) was the sanctuary where the "Warrior" phase (MMA training) began.
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        This vault links the physical memories of the 1990s with the deep history of the 1600s.
                    </p>
                </div>
            </div>
        </div>

        {/* Bottom Section: Ancestral Chronicles */}
        <div className="space-y-6">
            <h2 className="text-xl font-mono text-tungsten flex items-center gap-2 border-b border-white/10 pb-2">
                <ScrollText size={20} /> ANCESTRAL_CHRONICLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ANCESTRAL_STORIES.map((story) => (
                    <div key={story.id} className="bg-white/5 border border-white/10 p-5 rounded-lg hover:border-hud-cyan/30 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                story.lineage === 'MacDonald' ? 'text-alert-red border-alert-red/30 bg-alert-red/10' :
                                story.lineage === 'Power' ? 'text-hud-cyan border-hud-cyan/30 bg-hud-cyan/10' :
                                story.lineage === 'DuBois' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' :
                                'text-gray-300 border-gray-500/30 bg-gray-500/10'
                            }`}>
                                {story.lineage.toUpperCase()} LINE
                            </span>
                            <span className="text-[10px] font-mono text-gray-500">{story.era}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-3">
                            {story.content}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {story.tags.map((tag, i) => (
                                <span key={i} className="text-[9px] font-mono text-tungsten bg-black/40 px-1.5 py-0.5 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  );
};

export default GenealogyPage;