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
            Formerly a joke faction created by wholesalekevin12, now evolved into a Division within the stratocracy and reached 3k members, more than most of the noobic divisions nowadays.
          </p>
          <p className="border-l border-[#1a1a1a]/10 pl-8 uppercase tracking-wide text-sm">
            The Corps was founded on the principle that <span className="text-[#1a1a1a] font-bold italic">"No one is left behind,"</span> a directive that 
            drives every SOP and engagement protocol we deploy today. Our history is marked by 
            pivotal rescues during the Great Expansion and the stabilization of the Northern Sector.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-y border-[#1a1a1a]/10">
             <div className="group">
                <History className="w-8 h-8 mb-6 text-[#2c5d3f] transition-transform" />
                <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-3 text-[#1a1a1a]">System_Legacy</h3>
                <p className="text-sm text-gray-500 leading-relaxed uppercase font-mono">Continuous service since the founding of the Stratocracy coalition.</p>
             </div>
             <div className="group">
                <Target className="w-8 h-8 mb-6 text-[#2c5d3f] transition-transform" />
                <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-3 text-[#1a1a1a]">Mission_Directive</h3>
                <p className="text-sm text-gray-500 leading-relaxed uppercase font-mono">To provide unparalleled medical superiority and rapid response extraction.</p>
             </div>
          </div>

          <p className="italic border-l-4 border-[#2c5d3f] pl-6 py-4 bg-white/40 text-xs tracking-[0.2em] uppercase text-gray-500">
            [A link to the full Google Doc history will be provided here once available.]
          </p>
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
