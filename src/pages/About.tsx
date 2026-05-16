/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { History, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 bg-[#f2efea]">
      <section className="mb-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="flex items-center gap-4 mb-12"
        >
          <div className="w-2 h-12 bg-[#2c5d3f]" />
          <h1 className="text-6xl font-black tracking-tighter uppercase font-sans text-[#1a1a1a]">
            History_Archive
          </h1>
        </motion.div>
        
        <div className="space-y-12 text-lg text-gray-700 leading-relaxed font-mono">
          <p className="border-l border-[#1a1a1a]/10 pl-8 uppercase tracking-wide text-sm">
            Founded on <span className="text-[#1a1a1a] font-bold italic">December 6th, 2024</span>, GSMC began when the first Chief Surgeon, <span className="text-[#1a1a1a] font-bold italic">"wholesalekevin12"</span>, established the Roblox group. At its inception, the rank of Chief Surgeon was titled "Surgeon General."
          </p>
          <p className="border-l border-[#1a1a1a]/10 pl-8 uppercase tracking-wide text-sm">
            What started as a joke faction has evolved into a powerhouse Division within the Stratocracy, surpassing 3,000 members—a testament to its resilience and organizational superiority compared to the newer divisions.
          </p>
          <p className="border-l border-[#1a1a1a]/10 pl-8 uppercase tracking-wide text-sm">
            Originally intended as the first sub-unit of a broader network, the Corps was founded on the principle that <span className="text-[#1a1a1a] font-bold italic">"No one is left behind."</span> This directive continues to drive every SOP and engagement protocol we deploy today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-y border-[#1a1a1a]/10">
             <div className="group">
                <History className="w-8 h-8 mb-6 text-[#2c5d3f] transition-transform" />
                <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-3 text-[#1a1a1a]">System_Legacy</h3>
                <p className="text-sm text-gray-500 leading-relaxed uppercase font-mono">Continuous service since the founding of the Stratocracy coalition in late 2024.</p>
             </div>
             <div className="group">
                <Target className="w-8 h-8 mb-6 text-[#2c5d3f] transition-transform" />
                <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-3 text-[#1a1a1a]">Mission_Directive</h3>
                <p className="text-sm text-gray-500 leading-relaxed uppercase font-mono">To provide unparalleled medical superiority and rapid response extraction.</p>
             </div>
          </div>

          <a 
            href="https://docs.google.com/document/d/1LZQUrLWWKw9KhA1ZhtM6kh0kF3FgjsTjr4AMKz1MgXU/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="block italic border-l-4 border-[#2c5d3f] pl-6 py-4 bg-white/40 text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-[#2c5d3f] transition-colors"
          >
            Access Full History_Log [UNREDACTED]
          </a>
        </div>
      </section>

      <section className="bg-white border border-[#1a1a1a]/10 p-12 relative overflow-hidden shadow-sm">
        <ShieldCheck className="w-12 h-12 mb-8 text-[#2c5d3f]" />
        <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter text-[#1a1a1a]">Core_Logic</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="space-y-4">
            <span className="block text-[10px] font-mono font-black text-[#2c5d3f] tracking-[0.4em]">PRIORITY_01</span>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold font-mono">Integrity in clinical practice under fire.</p>
          </div>
          <div className="space-y-4">
            <span className="block text-[10px] font-mono font-black text-[#2c5d3f] tracking-[0.4em]">PRIORITY_02</span>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold font-mono">Tactical efficiency in extraction logistics.</p>
          </div>
          <div className="space-y-4">
            <span className="block text-[10px] font-mono font-black text-[#2c5d3f] tracking-[0.4em]">PRIORITY_03</span>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold font-mono">Unwavering loyalty to the medical oath.</p>
          </div>
        </div>
        <div className="absolute top-[-20px] right-[-20px] text-6xl font-black text-[#1a1a1a]/[0.02] select-none pointer-events-none uppercase rotate-12">Verified</div>
      </section>
    </main>
  );
}
