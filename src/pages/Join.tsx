/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ClipboardList, UserCheck, GraduationCap } from 'lucide-react';

export default function Join() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 bg-[#f2efea]">
      <header className="mb-24 relative">
        <div className="absolute -left-12 top-0 h-full w-[1px] bg-[#1a1a1a]/10 hidden lg:block" />
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-sans text-[#1a1a1a] italic uppercase leading-none">
          Enlist_GSMC
        </h1>
        <div className="flex items-center gap-3">
           <div className="h-[2px] w-12 bg-[#2c5d3f]" />
           <p className="text-[#2c5d3f] uppercase tracking-[0.4em] text-[10px] font-black font-mono">Official Recruitment Protocol v.1965</p>
        </div>
      </header>

      <div className="space-y-4">
        {[
          { icon: ClipboardList, step: '01', title: 'Application_Phase', desc: "Submit your initial request via our Discord server's enlistment channel. Ensure you meet the base level and activity requirements before applying." },
          { icon: UserCheck, step: '02', title: 'Tactical_Interview', desc: "Successful applicants will be invited to a voice interview with a Battalion Commander to assess tactical mindset and medical interest." },
          { icon: GraduationCap, step: '03', title: 'Probation_Training', desc: "Enlistees enter a 2-week probationary period where they undergo basic combat medic training (BCMT) covering extraction and stabilization." }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-start p-10 bg-white border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30 transition-all group shadow-sm">
            <div className="flex-shrink-0 w-20 h-20 border-2 border-[#1a1a1a] flex flex-col items-center justify-center font-mono font-black bg-[#f2efea]">
              <span className="text-[10px] text-[#1a1a1a]/40 leading-none mb-1">STEP</span>
              <span className="text-3xl text-[#1a1a1a] leading-none">{item.step}</span>
            </div>
            <div className="pt-2">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-4 uppercase tracking-tighter text-[#1a1a1a] font-sans">
                <item.icon className="w-6 h-6 text-[#2c5d3f]" /> {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-mono text-sm uppercase tracking-wider max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 border-2 border-[#1a1a1a] bg-white text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic text-[#1a1a1a] font-sans">Mandatory Induction Requirement</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
           <span className="text-[10px] font-mono text-[#2c5d3f] border border-[#2c5d3f]/30 px-4 py-2 bg-[#f2efea] tracking-[0.2em] font-black uppercase">Discord_Active</span>
           <span className="text-[10px] font-mono text-[#2c5d3f] border border-[#2c5d3f]/30 px-4 py-2 bg-[#f2efea] tracking-[0.2em] font-black uppercase">Voice_Comms_Req</span>
           <span className="text-[10px] font-mono text-[#2c5d3f] border border-[#2c5d3f]/30 px-4 py-2 bg-[#f2efea] tracking-[0.2em] font-black uppercase">Tactical_Aptitude</span>
        </div>
        
        <button className="relative px-16 py-6 bg-[#2c5d3f] text-white uppercase tracking-[0.4em] font-black hover:bg-[#1a1a1a] transition-all font-mono text-sm rounded-none border-b-4 border-[#1a1a1a]/30 group">
          <span className="relative z-10">Process_Enlistment</span>
          <div className="absolute inset-0 bg-[#2c5d3f]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        
        <div className="mt-12 text-[7px] font-mono text-gray-400 uppercase tracking-[0.5em]">
          Ref_Archive::Recruitment_Batch_Alpha // Authorized_By_Corps_Command
        </div>
      </div>
    </main>
  );
}
