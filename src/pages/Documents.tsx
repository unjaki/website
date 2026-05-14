/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { DOCUMENTS } from '../constants';
import { FileText, ExternalLink } from 'lucide-react';

export default function Documents() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32 bg-[#f2efea]">
      <header className="mb-24 flex items-end justify-between border-b-2 border-[#1a1a1a] pb-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-[#2c5d3f]" />
              <span className="text-[10px] font-mono text-[#2c5d3f] tracking-[0.5em] font-black uppercase">Technical_Dossier_Vault</span>
           </div>
           <h1 className="text-5xl font-black tracking-tighter uppercase font-sans text-[#1a1a1a]">Central_Repository</h1>
        </div>
        <div className="text-right">
          <p className="text-[#1a1a1a] font-mono text-[10px] uppercase tracking-widest font-black">
             SECURE_LOG_REF_772
          </p>
          <p className="text-gray-400 font-mono text-[8px] uppercase tracking-widest">
             Level: Restricted_Access
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DOCUMENTS.map((doc, index) => (
          <motion.a
            key={doc.id}
            href={doc.url}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative block p-12 bg-white border border-[#1a1a1a]/10 hover:border-[#1a1a1a] transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
          >
            {/* Background Stamp Effect */}
            <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity rotate-12">
              <FileText className="w-48 h-48 text-[#1a1a1a]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] px-3 py-1 bg-[#2c5d3f]/5 text-[#2c5d3f] border border-[#2c5d3f]/20">
                  {doc.category}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#1a1a1a]/30">
                  REF::{doc.id.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-6 text-[#1a1a1a] flex items-center justify-between group-hover:text-[#2c5d3f] transition-colors uppercase tracking-tight font-sans">
                {doc.title}
                <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all text-[#1a1a1a] translate-x-2 group-hover:translate-x-0" />
              </h3>

              <div className="pt-6 border-t border-[#1a1a1a]/5">
                <p className="text-sm text-gray-600 leading-relaxed font-mono uppercase tracking-wide italic">
                  {doc.summary}
                </p>
              </div>

              {/* Technical Indicator */}
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 rounded-full bg-[#2c5d3f] animate-pulse" />
                <span className="text-[7px] font-mono text-[#2c5d3f] tracking-[0.4em] font-black uppercase">
                   Authorized_Read_Sequence
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
      <footer className="mt-32 pt-8 border-t border-[#1a1a1a]/10 flex justify-center">
        <div className="px-8 py-3 border border-[#1a1a1a]/20 text-[8px] font-mono text-gray-400 uppercase tracking-[0.5em] italic">
          Classified_Information__Property_of_GSMC_Command
        </div>
      </footer>
    </main>
  );
}
