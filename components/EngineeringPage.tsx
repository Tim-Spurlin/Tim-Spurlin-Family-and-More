import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Glasses, ShieldCheck, MapPin, Database, Zap } from 'lucide-react';

const EngineeringPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-4 md:p-8 space-y-12"
    >
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">System Architecture</h1>
                <p className="text-hud-cyan font-mono text-sm">THE LOGIC OF SYSTEMS & INNOVATION</p>
            </div>
            <div className="text-right hidden md:block">
                <p className="font-mono text-xs text-gray-500">INIT_TIMESTAMP: 2007</p>
                <p className="font-mono text-xs text-gray-500">CURRENT_STATE: DEPLOYED</p>
            </div>
        </header>

        {/* HERO PROJECT: TelePrompt Glass */}
        <section className="relative bg-white/5 border border-hud-cyan/30 rounded-xl p-6 md:p-10 overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Glasses size={200} />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-5 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-hud-cyan/20 text-hud-cyan border border-hud-cyan/50 font-mono text-xs font-bold">
                        <Glasses size={14} />
                        INVENTION_REPORT: 001
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        TelePrompt Glass: <br/>
                        <span className="text-hud-cyan">The First AI AR Interface</span>
                    </h2>
                    <div className="font-mono text-xs text-gray-400 space-y-2 border-l-2 border-white/10 pl-4">
                        <p>ORIGIN: 2 Weeks Post-Chat GPT-2 Release (2019)</p>
                        <p>LANGUAGES: Python (Proto) -> C++ (Production)</p>
                        <p>GRANT: Microsoft ($150k + Github Ent.)</p>
                        <p>STATUS: Active / Microsoft Partner</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <span className="bg-blue-500/20 text-blue-400 text-[10px] font-mono px-2 py-1 rounded border border-blue-500/30">MICROSOFT_GRANT</span>
                        <span className="bg-green-500/20 text-green-400 text-[10px] font-mono px-2 py-1 rounded border border-green-500/30">CHAT_GPT2_ORIGIN</span>
                        <span className="bg-orange-500/20 text-orange-400 text-[10px] font-mono px-2 py-1 rounded border border-orange-500/30">C++_EMBEDDED</span>
                    </div>
                </div>

                <div className="md:col-span-7 space-y-6 text-sm text-gray-300 leading-relaxed">
                    <p>
                        <strong className="text-white">The Genesis:</strong> Just two weeks after the release of <strong className="text-white">Chat GPT-2</strong> in 2019, I engineered the first iteration of TelePrompt Glass, making Timothy Christian Spurlin the first person in America to ever build this technology.
                    </p>
                    <p>
                        Recognizing the singularity of this invention, <strong className="text-white">Microsoft</strong> offered a partnership and a <strong className="text-hud-cyan">$150,000 grant</strong> only two weeks later. This partnership remains active today, with Microsoft covering enterprise-tier GitHub costs (> $400/mo) and providing continued access to international markets.
                    </p>
                    
                    <div className="bg-black/40 p-4 rounded-lg border border-white/10 space-y-3">
                        <h3 className="text-hud-cyan font-mono text-xs uppercase flex items-center gap-2">
                            <MapPin size={12} /> Context-Aware Transcription Engine
                        </h3>
                        <p className="text-xs">
                            Originally prototyped in Python, the core engine was rewritten in <strong className="text-white">C++</strong> for embedded hardware performance. The system utilizes a multi-model approach, integrating <strong className="text-white">Google Maps API</strong> to enrich voice-to-text transcription with environmental context.
                        </p>
                        <div className="pl-3 border-l border-gray-600 italic text-gray-400 text-xs">
                            "If I am standing at <span className="text-hud-cyan">Susie's Taco Stand</span> and dictate a message, the system uses my geospatial coordinates to disambiguate the audio, ensuring 'taco' or 'stand' is transcribed perfectly before the enriched prompt hits the LLM."
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 p-3 rounded border border-white/10">
                             <h3 className="text-white font-mono text-xs uppercase flex items-center gap-2 mb-2">
                                <Zap size={12} /> The "Unfair Advantage"
                            </h3>
                            <p className="text-[10px] text-gray-400">
                                The "TelePrompt" application acts as a digital nervous system for social interaction. Whether for job interviews or customer support, the system listens and projects verbatim, context-aware responses onto the glass in Augmented Reality, eliminating the fear of blank spaces.
                            </p>
                        </div>
                        <div className="bg-alert-red/10 p-3 rounded border border-alert-red/20">
                             <h3 className="text-alert-red font-mono text-xs uppercase flex items-center gap-2 mb-2">
                                <ShieldCheck size={12} /> Judicial Integration
                            </h3>
                            <p className="text-[10px] text-gray-400">
                                Developed integration for <strong className="text-white">police databases</strong> and judicial systems. The glasses feature real-time <strong className="text-white">facial recognition</strong> that allows officers to determine immediately if a subject has an active warrant.
                            </p>
                        </div>
                    </div>

                    <p className="text-xs font-mono text-green-500 pt-2 border-t border-white/10">
                        > LEGACY: Technology paved the way for Meta AI, OpenAI, and G2 Glasses integration.
                    </p>
                </div>
            </div>
        </section>

        {/* Case Study 2: Alibaba Arbitrage */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 opacity-80 hover:opacity-100 transition-opacity">
            <div className="md:col-span-4 space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-gray-300 border border-white/20">
                    <Globe size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">The Arbitrage Architect</h2>
                <div className="font-mono text-xs text-gray-500 space-y-1">
                    <p>AGE: 13</p>
                    <p>LOCATION: Indian Lake, GA</p>
                    <p>OBJECTIVE: Acquire Tech Capital</p>
                </div>
            </div>
            <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden">
                <h3 className="text-lg font-mono text-hud-cyan mb-4">LOG: ALIBABA_TO_EBAY_PIPELINE</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Long before "dropshipping" was industry standard, I engineered a global logistics chain from a bedroom in rural Georgia. 
                    Desperate for a Windows Vista PC ($1500) and the unreleased iPhone, I utilized arbitrage.
                </p>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="font-mono text-alert-red font-bold">01.</span>
                        <p className="text-sm text-gray-400">Identified "Clone iPhones" on Alibaba (China) running early Android forks.</p>
                    </li>
                    <li className="flex gap-4">
                        <span className="font-mono text-alert-red font-bold">02.</span>
                        <p className="text-sm text-gray-400">Listed inventory on eBay with zero stock on hand.</p>
                    </li>
                    <li className="flex gap-4">
                        <span className="font-mono text-alert-red font-bold">03.</span>
                        <p className="text-sm text-gray-400">Executed JIT (Just-In-Time) fulfillment by routing Alibaba shipments directly to eBay customers, capturing a ~60% margin.</p>
                    </li>
                </ul>
            </div>
        </section>

        {/* Case Study 3: Java Hack */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 opacity-80 hover:opacity-100 transition-opacity">
            <div className="md:col-span-4 space-y-4 md:order-2">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-gray-300 border border-white/20">
                    <Cpu size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">The Impossible Java Hack</h2>
                <div className="font-mono text-xs text-gray-500 space-y-1">
                    <p>DEVICE: Motorola Flip</p>
                    <p>CONSTRAINT: Hardware Lock</p>
                    <p>RESULT: Job Offer (Rescinded due to age)</p>
                </div>
            </div>
            <div className="md:col-span-8 md:order-1 bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                 <h3 className="text-lg font-mono text-purple-400 mb-4">LOG: MOTOROLA_MODIFICATION</h3>
                 <p className="text-gray-300 leading-relaxed mb-6">
                     Carrier representatives claimed Java game support was impossible on my device. Rejecting the "impossible," I located obscure documentation and manually injected the Java runtime environment.
                 </p>
                 <div className="bg-black/50 p-4 rounded border border-white/10 font-mono text-xs text-green-500 overflow-x-auto">
                     <p>$ accessing file_system...</p>
                     <p>$ override carrier_restrictions = true</p>
                     <p>$ inject J2ME_midlet</p>
                     <p>$ status: SUCCESS</p>
                 </div>
            </div>
        </section>

    </motion.div>
  );
};

export default EngineeringPage;