import React from 'react';
import { motion } from 'framer-motion';
import { 
    Cpu, 
    Music, 
    Hammer, 
    Search, 
    Clock, 
    CloudRain, 
    Terminal as TerminalIcon, 
    ShieldAlert, 
    Play, 
    Pause,
    ArrowUpRight,
    Link,
    Glasses
} from 'lucide-react';
import { BIO_SUMMARY, TIMELINE, MUSIC_TRACKS, MOCK_COMMITS, LINKTREE_URL } from '../constants';
import { useAudio } from './AudioContext';
import Visualizer from './Visualizer';
import GenealogyGraph from './GenealogyGraph';
import { PageView } from '../types';

interface BentoProps {
  onOpenTerminal: () => void;
  onNavigate: (page: PageView) => void;
}

const BentoCard: React.FC<{ 
    className?: string; 
    children: React.ReactNode; 
    title?: string;
    icon?: React.ReactNode;
    noPadding?: boolean;
    onClick?: () => void;
}> = ({ className, children, title, icon, noPadding = false, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:border-hud-cyan transition-all duration-300 group relative flex flex-col ${onClick ? 'cursor-pointer hover:bg-white/10' : ''} ${className}`}
  >
    {title && (
      <div className="flex items-center justify-between p-4 pb-2 border-b border-white/5 text-hud-cyan font-mono text-xs uppercase tracking-wider">
        <div className="flex items-center gap-2">
            {icon}
            {title}
        </div>
        {onClick && <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
      </div>
    )}
    <div className={`flex-grow relative ${noPadding ? '' : 'p-4'}`}>
      {children}
    </div>
    {/* Corner Accents */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-hud-cyan transition-colors" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-hud-cyan transition-colors" />
  </motion.div>
);

const BentoGrid: React.FC<BentoProps> = ({ onOpenTerminal, onNavigate }) => {
  const { isPlaying, currentTrack, togglePlay, currentTime, duration } = useAudio();
  const [activeTab, setActiveTab] = React.useState<'timeline' | 'bio'>('bio');

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
      
      {/* 1. COMMAND MODULE (2x2) -> Links to BIO */}
      <BentoCard 
        className="md:col-span-2 md:row-span-2 min-h-[400px]" 
        title="Command Module" 
        icon={<ShieldAlert size={14}/>}
      >
        <div className="flex flex-col h-full">
            <div className="flex items-start gap-4 mb-4">
                <div className="relative group/avatar cursor-pointer" onClick={() => onNavigate(PageView.BIO)}>
                    <img 
                        src="https://picsum.photos/seed/christian/150/150" 
                        alt="Christian Kota" 
                        className="w-24 h-24 rounded-full border-2 border-tungsten group-hover/avatar:border-hud-cyan transition-colors object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-hud-cyan/20 opacity-0 group-hover/avatar:opacity-100 animate-pulse transition-opacity" />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-sans font-bold text-white mb-1">Christian Kota</h1>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hud-cyan opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-hud-cyan"></span>
                        </span>
                        <span className="font-mono text-xs text-hud-cyan border border-hud-cyan/30 px-2 py-0.5 rounded bg-hud-cyan/10">
                            BUILDING GLOBAL INFRASTRUCTURE
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm font-mono mb-2">
                        Analyst | Engineer | Tradesman | Artist
                    </p>
                    <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-mono text-hud-cyan border border-hud-cyan/30 px-2 py-1 rounded bg-hud-cyan/5 hover:bg-hud-cyan/10 transition-colors w-fit">
                        <Link size={10} />
                        LINKTREE_CONNECT
                    </a>
                </div>
            </div>

            <div className="flex gap-4 border-b border-white/10 mb-4 font-mono text-xs">
                <button 
                    onClick={() => setActiveTab('bio')}
                    className={`pb-2 ${activeTab === 'bio' ? 'text-hud-cyan border-b border-hud-cyan' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    PERSONNEL FILE
                </button>
                <button 
                    onClick={() => setActiveTab('timeline')}
                    className={`pb-2 ${activeTab === 'timeline' ? 'text-hud-cyan border-b border-hud-cyan' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    SERVICE RECORD
                </button>
            </div>

            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                {activeTab === 'bio' ? (
                    <div className="prose prose-invert prose-sm">
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed font-sans line-clamp-6">
                            {BIO_SUMMARY}
                        </p>
                        <button onClick={() => onNavigate(PageView.BIO)} className="mt-2 text-xs text-hud-cyan hover:underline font-mono">
                            {'> VIEW FULL DOSSIER'}
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {TIMELINE.slice(0,3).map((event, i) => (
                            <div key={i} className="pl-4 border-l border-white/20 relative">
                                <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ${event.category === 'survival' ? 'bg-alert-red' : event.category === 'intel' ? 'bg-hud-cyan' : 'bg-white'}`} />
                                <span className="text-xs font-mono text-hud-cyan">{event.year}</span>
                                <h3 className="font-bold text-white text-sm">{event.title}</h3>
                            </div>
                        ))}
                         <button onClick={() => onNavigate(PageView.BIO)} className="text-xs text-hud-cyan hover:underline font-mono pl-4">
                            {'> VIEW FULL TIMELINE'}
                        </button>
                    </div>
                )}
            </div>
        </div>
      </BentoCard>

      {/* 2. SYSTEM MONITOR (1x1) - Links to Engineering */}
      <BentoCard 
        className="md:col-span-1 md:row-span-1" 
        title="System Monitor" 
        icon={<Cpu size={14}/>}
        onClick={() => onNavigate(PageView.ENGINEERING)}
      >
        <div className="flex flex-col h-full justify-between pointer-events-none">
            <div className="flex items-end justify-between mb-2">
                <span className="text-4xl font-mono font-bold text-white">4,281</span>
                <span className="text-xs text-green-500 font-mono mb-1">CONTRIBUTIONS</span>
            </div>
            {/* Fake Activity Graph */}
            <div className="flex gap-0.5 h-16 items-end mb-2">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                        key={i} 
                        className="flex-1 bg-hud-cyan/20 rounded-sm transition-all duration-300"
                        style={{ height: `${Math.random() * 100}%` }}
                    />
                ))}
            </div>
            <div className="space-y-2">
                {MOCK_COMMITS.slice(0, 2).map(commit => (
                    <div key={commit.id} className="text-[10px] font-mono text-gray-400 border-t border-white/5 pt-1">
                        <span className="text-hud-cyan">{commit.id}</span> {commit.message}
                    </div>
                ))}
            </div>
        </div>
      </BentoCard>

      {/* 3. CONTEXT WIDGETS (1x1 Split) */}
      <div className="md:col-span-1 md:row-span-1 grid grid-rows-2 gap-4">
          <BentoCard noPadding className="relative bg-[url('https://picsum.photos/seed/welding/300/150')] bg-cover bg-center group">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="text-center">
                      <Clock className="mx-auto text-hud-cyan mb-1" size={20} />
                      <span className="font-mono text-lg font-bold">14:02 EST</span>
                      <p className="text-[10px] text-gray-400 uppercase">Georgia, US</p>
                  </div>
              </div>
          </BentoCard>
          <BentoCard noPadding className="relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                   <div className="text-center">
                        <CloudRain className="mx-auto text-white mb-1" size={20} />
                        <span className="font-mono text-lg font-bold">72°F</span>
                        <p className="text-[10px] text-gray-400 uppercase">Partly Cloudy</p>
                   </div>
               </div>
          </BentoCard>
      </div>

      {/* 4. AUDIO CORE (2x1) */}
      <BentoCard className="md:col-span-2 md:row-span-1" title="Audio Core" icon={<Music size={14}/>}>
        <div className="flex items-center gap-4 h-full">
            <div className="w-20 h-20 bg-black rounded border border-white/10 relative overflow-hidden shrink-0 group">
                <img src={currentTrack.coverArt} alt="Cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <button 
                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-white font-bold truncate">{currentTrack.title}</h3>
                <p className="text-hud-cyan text-xs font-mono mb-2">{currentTrack.artist}</p>
                <div className="w-full h-8 bg-black/50 rounded overflow-hidden border border-white/5 relative">
                     <Visualizer />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration || 0)}</span>
                </div>
            </div>
        </div>
      </BentoCard>

      {/* 5. FORENSIC GENEALOGY (2x2) -> Links to Genealogy */}
      <BentoCard 
        className="md:col-span-2 md:row-span-2 min-h-[300px]" 
        title="Forensic Analysis" 
        icon={<Search size={14}/>} 
        noPadding
        onClick={() => onNavigate(PageView.GENEALOGY)}
      >
         <div className="h-full relative pointer-events-none">
            <GenealogyGraph allowFullScreen={false} />
            <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs text-hud-cyan font-mono z-10">
                {'> EXPAND GRAPH'}
            </div>
         </div>
      </BentoCard>

      {/* 6. LOGIC OF MATTER (1x2) - Split into Trades & AI/Eng */}
      <BentoCard className="md:col-span-1 md:row-span-2" title="Logic of Matter" icon={<Hammer size={14}/>} noPadding>
         <div className="h-full flex flex-col">
             {/* Top: Trades (Static/Visual) */}
             <div className="h-1/2 relative group border-b border-white/10 cursor-default">
                 <img src="https://picsum.photos/seed/weld1/400/600" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                 <div className="absolute bottom-0 left-0 p-2 bg-black/80 w-full">
                     <p className="font-mono text-[10px] text-hud-cyan">TIG WELDING / 308L</p>
                 </div>
             </div>
             
             {/* Bottom: AI Glass (Clickable -> Engineering) */}
             <div 
                className="h-1/2 relative group cursor-pointer hover:border-hud-cyan border-t border-transparent transition-colors"
                onClick={() => onNavigate(PageView.ENGINEERING)}
             >
                 {/* Futuristic Circuit Overlay for Glass effect */}
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech_glass/400/600')] bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                 
                 {/* Overlay Icon */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                     <Glasses className="text-hud-cyan" size={32} />
                 </div>

                 <div className="absolute bottom-0 left-0 p-2 bg-black/90 w-full border-t border-hud-cyan/30">
                     <div className="flex justify-between items-center">
                         <p className="font-mono text-[10px] text-white font-bold">TELEPROMPT GLASS</p>
                         <ArrowUpRight size={10} className="text-hud-cyan" />
                     </div>
                     <p className="font-mono text-[9px] text-hud-cyan mt-0.5">AI AR / MICROSOFT</p>
                 </div>
             </div>
         </div>
      </BentoCard>

      {/* 7. TERMINAL ACCESS (1x1) */}
      <BentoCard className="md:col-span-1 md:row-span-1 group cursor-pointer" title="System Root" icon={<TerminalIcon size={14}/>}>
         <div onClick={onOpenTerminal} className="h-full flex flex-col items-center justify-center text-center hover:bg-green-900/10 transition-colors rounded">
            <TerminalIcon size={40} className="text-gray-600 group-hover:text-green-500 mb-2 transition-colors" />
            <span className="font-mono text-xs text-gray-500 group-hover:text-green-500">{'> ACCESS TERMINAL'}</span>
         </div>
      </BentoCard>

    </div>
  );
};

export default BentoGrid;