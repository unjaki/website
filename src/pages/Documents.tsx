/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { DOCUMENTS } from '../constants';
import { FileText, ExternalLink } from 'lucide-react';

export default function Documents() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32 bg-[#070907]">
      <header className="mb-24 flex items-end justify-between border-b-2 border-neutral-900 pb-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-emerald-500" />
              <span className="text-[10px] font-mono text-emerald-400 tracking-[0.5em] font-black uppercase">Technical_Dossier_Vault</span>
           </div>
           <h1 className="text-5xl font-black tracking-tighter uppercase font-sans text-white">Central_Repository</h1>
        </div>
        <div className="text-right">
          <p className="text-gray-300 font-mono text-[10px] uppercase tracking-widest font-black">
             SECURE_LOG_REF_772
          </p>
          <p className="text-gray-500 font-mono text-[8px] uppercase tracking-widest">
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
            className="group relative block p-12 bg-neutral-950 border border-neutral-900 hover:border-emerald-500/20 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
          >
            {/* Background Stamp Effect */}
            <div className="absolute -top-4 -right-4 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity rotate-12">
              <FileText className="w-48 h-48 text-emerald-400" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] px-3 py-1 bg-emerald-950/20 text-emerald-400 border border-emerald-500/10">
                  {doc.category}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500">
                  REF::{doc.id.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-6 text-white flex items-center justify-between group-hover:text-emerald-400 transition-colors uppercase tracking-tight font-sans">
                {doc.title}
                <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all text-gray-400 translate-x-2 group-hover:translate-x-0" />
              </h3>

              <div className="pt-6 border-t border-neutral-900">
                <p className="text-sm text-gray-400 leading-relaxed font-mono uppercase tracking-wide italic">
                  {doc.summary}
                </p>
              </div>

              {/* Technical Indicator */}
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7px] font-mono text-emerald-400 tracking-[0.4em] font-black uppercase">
                   Authorized_Read_Sequence
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
      <footer className="mt-32 pt-8 border-t border-neutral-900 flex justify-center">
        <div className="px-8 py-3 border border-neutral-800 text-[8px] font-mono text-gray-500 uppercase tracking-[0.5em] italic">
          Classified_Information__Property_of_GSMC_Command
        </div>
      </footer>
    </main>
  );
}
