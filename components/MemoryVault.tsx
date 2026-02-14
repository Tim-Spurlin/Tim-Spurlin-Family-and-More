import React, { useState } from 'react';
import { MEMORY_VIDEOS } from '../constants';
import { Play } from 'lucide-react';

const MemoryVault: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(MEMORY_VIDEOS[0]);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 backdrop-blur-md">
      <h2 className="text-hud-cyan font-mono text-xl mb-4 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 bg-hud-cyan rounded-full animate-pulse"/>
        Memory_Vault.mp4
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Player */}
        <div className="md:col-span-2 space-y-2">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-tungsten/50 shadow-2xl">
            <video 
              key={activeVideo.id}
              controls 
              className="w-full h-full object-cover"
              src={activeVideo.url}
              poster={activeVideo.thumbnail}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-2">
            <h3 className="text-white font-bold text-lg">{activeVideo.title}</h3>
            <p className="text-hud-cyan font-mono text-xs">{activeVideo.date}</p>
            <p className="text-gray-400 text-sm mt-1">{activeVideo.description}</p>
          </div>
        </div>

        {/* Playlist */}
        <div className="md:col-span-1 space-y-2 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
          <h3 className="text-tungsten font-mono text-xs uppercase mb-2 border-b border-tungsten/30 pb-1">Archive Index</h3>
          {MEMORY_VIDEOS.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`p-3 rounded-lg cursor-pointer transition-all border ${
                activeVideo.id === video.id 
                  ? 'bg-hud-cyan/10 border-hud-cyan' 
                  : 'bg-black/20 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black rounded overflow-hidden relative shrink-0">
                    <img src={video.thumbnail} className="w-full h-full object-cover opacity-60" />
                    <Play className="absolute inset-0 m-auto text-white w-4 h-4" />
                </div>
                <div>
                    <h4 className={`text-sm font-bold ${activeVideo.id === video.id ? 'text-white' : 'text-gray-400'}`}>
                        {video.title}
                    </h4>
                    <span className="text-[10px] font-mono text-tungsten">{video.date}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="p-4 border border-dashed border-white/10 rounded-lg text-center">
            <p className="text-xs text-gray-500 font-mono">
              SYSTEM MESSAGE: To upload media, place files in <span className="text-hud-cyan">/public/assets/videos/</span> and update <span className="text-hud-cyan">constants.ts</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryVault;