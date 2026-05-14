/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { DISCORD_CONFIG, GSMC_DESCRIPTION } from '../constants';
import { ShieldPlus, Activity, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [bannerUrl, setBannerUrl] = useState(DISCORD_CONFIG.fallbackBanner);

  useEffect(() => {
    async function fetchBanner() {
      try {
        const response = await fetch(`/api/discord/banner/${DISCORD_CONFIG.vanityCode}`);
        if (response.ok) {
          const data = await response.json();
          if (data.bannerUrl) {
            setBannerUrl(data.bannerUrl);
          }
        }
      } catch (error) {
        console.error('Failed to load real banner:', error);
      }
    }
    fetchBanner();
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-73px)] flex flex-col items-center justify-center overflow-hidden bg-[#f2efea]">
      {/* Discord Banner - Faded archival style */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] grayscale mix-blend-multiply"
        style={{
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle paper texture/noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <header className="flex flex-col items-start mb-20 relative">
          <div className="absolute -left-12 top-0 h-full w-[2px] bg-[#2c5d3f]/20 hidden lg:block" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-16 h-16 border border-[#1a1a1a] bg-white p-2">
              <img 
                src={DISCORD_CONFIG.logoUrl} 
                alt="GSMC" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>';
                }}
              />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#2c5d3f] font-black uppercase">Official Accession Log</span>
              <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1">Ref_ID: {DISCORD_CONFIG.vanityCode.toUpperCase()} // Alpha_Sector</h2>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-8 text-[#1a1a1a] uppercase text-left w-full"
          >
            Ground_Service<br />
            <span className="text-[#2c5d3f]">Medical_Corps</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-[1px] bg-[#1a1a1a]/10 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 max-w-2xl leading-relaxed font-mono uppercase tracking-wider mb-20 border-l-2 border-[#2c5d3f] pl-8 italic text-left"
          >
            {GSMC_DESCRIPTION}
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-5 h-5 text-[#2c5d3f]" />
              <div className="h-[1px] flex-grow bg-[#1a1a1a]/10" />
            </div>
            <h3 className="font-bold mb-4 uppercase text-[10px] tracking-[0.3em] font-mono text-[#1a1a1a]">01_Operational_Readiness</h3>
            <p className="text-xs text-gray-500 font-mono leading-relaxed uppercase tracking-wide text-left">24/7 Readiness for high-intensity conflicts and humanitarian crisis response.</p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <ShieldPlus className="w-5 h-5 text-[#2c5d3f]" />
              <div className="h-[1px] flex-grow bg-[#1a1a1a]/10" />
            </div>
            <h3 className="font-bold mb-4 uppercase text-[10px] tracking-[0.3em] font-mono text-[#1a1a1a]">02_Clinical_Protocol</h3>
            <p className="text-xs text-gray-500 font-mono leading-relaxed uppercase tracking-wide text-left">Elite clinical protocols derived from years of battlefield experience.</p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-[#2c5d3f]" />
              <div className="h-[1px] flex-grow bg-[#1a1a1a]/10" />
            </div>
            <h3 className="font-bold mb-4 uppercase text-[10px] tracking-[0.3em] font-mono text-[#1a1a1a]">03_Unified_Command</h3>
            <p className="text-xs text-gray-500 font-mono leading-relaxed uppercase tracking-wide text-left">Coordinated response between 33rd and 29th CMB battalions.</p>
          </div>
        </motion.div>
        
        {/* Footer info line like a fax header */}
        <div className="mt-32 pt-8 border-t border-[#1a1a1a]/10 flex justify-between items-center text-[8px] font-mono text-gray-400 uppercase tracking-[0.4em]">
          <span>Transmit_Timestamp::{new Date().toLocaleDateString()}</span>
          <span>GSMC_SECURE_NODE_07</span>
          <span>End_of_File</span>
        </div>
      </main>
    </div>
  );
}
